import React, { useMemo } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Modal, Text, Button, useTheme } from 'react-native-paper';

interface CustomModalProps {
  visible: boolean;
  onDismiss: () => void;
  title: string;
  content: React.ReactNode;
  confirmAction?: () => void;
  cancelAction?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onDismiss,
  title,
  content,
  confirmAction,
  cancelAction,
  confirmText = 'Confirmer',
  cancelText = 'Annuler'
}) => {
  const theme = useTheme();
  const windowHeight = Dimensions.get('window').height;
  const modalMaxHeight = useMemo(() => windowHeight * 0.4, [windowHeight]);

  const renderButtons = useMemo(() => {
    if (confirmAction && cancelAction) {
      return (
        <View style={styles.buttonContainer}>
          <Button onPress={cancelAction} style={styles.button}>{cancelText}</Button>
          <Button onPress={confirmAction} style={styles.button}>{confirmText}</Button>
        </View>
      );
    } else if (confirmAction) {
      return (
        <Button onPress={confirmAction} style={styles.singleButton}>{confirmText}</Button>
      );
    }
    return null;
  }, [confirmAction, cancelAction, confirmText, cancelText]);

  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
      <View style={[styles.modalContent, { backgroundColor: theme.colors.surface, maxHeight: modalMaxHeight }]}>
        <Text style={[styles.modalTitle, { color: theme.colors.primary }]}>{title}</Text>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
          {content}
        </ScrollView>
        {renderButtons}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  modalContent: {
    width: '100%',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollView: {
    flexGrow: 0,
    marginBottom: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  singleButton: {
    alignSelf: 'center',
  },
});

export default CustomModal;