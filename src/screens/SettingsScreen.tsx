import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Switch, IconButton, Button, Divider, useTheme, Portal, Dialog, Modal } from 'react-native-paper';
import { useTheme as useCustomTheme } from '../hooks/useTheme';
import { useAppContext } from '../context/AppContext';
import CustomModal from '../components/CustomModal';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useCustomTheme();
  const { settings, updateSettings, debugAsyncStorage, resetAsyncStorage } = useAppContext();
  const [debugData, setDebugData] = useState<string | null>(null);
  const [isDebugModalVisible, setIsDebugModalVisible] = useState(false);
  const [isResetModalVisible, setIsResetModalVisible] = useState(false);
  const MaxServings = 20;
  const theme = useTheme();

  const updateServings = useCallback((newServings: number) => {
    updateSettings({ servingsCounts: newServings });
  }, [updateSettings]);

  const incrementServings = useCallback(() => {
    updateServings(Math.min(settings.servingsCounts + 1, MaxServings));
  }, [settings.servingsCounts, updateServings, MaxServings]);

  const decrementServings = useCallback(() => {
    updateServings(Math.max(settings.servingsCounts - 1, 1));
  }, [settings.servingsCounts, updateServings]);

  const handleDebugStorage = async () => {
    const data = await debugAsyncStorage();
    setDebugData(JSON.stringify(data, null, 2));
    setIsDebugModalVisible(true);
  };

  const handleResetStorage = () => {
    setIsResetModalVisible(true);
  };

  const confirmResetStorage = () => {
    resetAsyncStorage();
    setIsResetModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.inverseSurface }]}>Paramètres de l'application</Text>
      <View style={styles.setting}>
        <Text style={{ color: theme.colors.inverseSurface }}>Thème Sombre</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
      <View style={styles.setting}>
        <Text style={{ color: theme.colors.inverseSurface }}>Nombre de personnes</Text>
        <View style={styles.stepper}>
          <IconButton
            icon="minus"
            size={20}
            onPress={decrementServings}
            disabled={settings.servingsCounts <= 1}
          />
          <View style={styles.servingsCount}>
            <Text style={[styles.servingsText, { color: theme.colors.secondary }]}>{settings.servingsCounts}</Text>
          </View>
          <IconButton
            icon="plus"
            size={20}
            onPress={incrementServings}
            disabled={settings.servingsCounts >= MaxServings}
          />
        </View>
      </View>
      
      <View style={styles.dividerContainer}>
        <Divider style={styles.divider} />
      </View>
      
      <Text style={[styles.subtitle, { color: theme.colors.primary }]}>Avertissements</Text>
      <View style={styles.warningButtons}>
        <View style={styles.warningButton}>
          <Text style={{ color: theme.colors.inverseSurface }}>Déboguer le stockage</Text>
          <Button mode="contained-tonal" onPress={handleDebugStorage} style={styles.button}>
            Déboguer
          </Button>
        </View>
        <View style={styles.warningButton}>
          <Text style={{ color: theme.colors.primary }}>Réinitialiser le stockage</Text>
          <Button mode="contained" onPress={handleResetStorage} style={styles.button}>
            Réinitialiser
          </Button>
        </View>
      </View>

      <CustomModal
        visible={isDebugModalVisible}
        onDismiss={() => setIsDebugModalVisible(false)}
        title="Données de débogage"
        content={<Text style={{ color: theme.colors.inverseSurface }}>{debugData}</Text>}
        confirmAction={() => setIsDebugModalVisible(false)}
        confirmText="Fermer"
      />

      <CustomModal
        visible={isResetModalVisible}
        onDismiss={() => setIsResetModalVisible(false)}
        title="Attention"
        content={
          <Text style={{ color: theme.colors.onSurface }}>
            Attention, tout le contenu du stockage sera effacé. Cette action est irréversible. Voulez-vous vraiment continuer ?
          </Text>
        }
        confirmAction={confirmResetStorage}
        cancelAction={() => setIsResetModalVisible(false)}
        confirmText="Confirmer"
        cancelText="Annuler"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  servingsCount: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  servingsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerContainer: {
    marginTop: 120,
    marginBottom: 20,
  },
  divider: {
    backgroundColor: '#ccc',
    height: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  warningButtons: {
    flexDirection: 'column',
  },
  warningButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    width: 120,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '70%',
    marginHorizontal: '10%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SettingsScreen;