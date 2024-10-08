# EatSmart - Application de Planification de Repas

EatSmart est une application mobile de planification de repas développée avec React Native et Expo. Elle permet aux utilisateurs de gérer leurs recettes, planifier leurs repas, et générer automatiquement des listes de courses.

## Structure du projet EatSmart

```
EatSmart/
├── .expo/
│   ├── devices.json
│   ├── packager-info.json
│   ├── settings.json
├── .gitignore
├── .vscode/
│   └── .react/
├── app.json
├── App.tsx
├── assets/
├── babel.config.js
├── eas.json
├── package.json
├── README.md
├── src/
│   ├── components/
│   │   ├── CustomModal.tsx
│   │   ├── MealPlanItem.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── SelectComponent.tsx
│   │   └── ShoppingListItem.tsx
│   ├── constants/
│   │   ├── Database.ts
│   │   ├── RecipesPreset.ts
│   │   └── Theme.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── hooks/
│   │   ├── useDatabase.ts
│   │   └── useTheme.ts
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── screens/
│   │   ├── AddRecipeScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   ├── MealPlanEditScreen.tsx
│   │   ├── MealPlannerScreen.tsx
│   │   ├── RecipeDetailScreen.tsx
│   │   ├── RecipesScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── ShoppingListScreen.tsx
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── mealPlanGenerator.ts
│       ├── recipeParser.ts
│       └── shoppingListGenerator.ts
├── structure.py
├── tsconfig.json
```

## Installation

1. Clonez le dépôt :
   ```
   git clone https://github.com/ajkula/EatSmart.git
   ```
2. Installez les dépendances :
   ```
   cd EatSmart
   npm install
   ```

## Démarrer le projet en local

```bash
npx expo start
```

## Build l'application pour Android

1. installer `eas-cli` si ce n'est pas déjà fait
```bash
npm install -g eas-cli
```
2. se loguer avec `eas-cli`
```bash
eas login
```
3. build l'application pour Android
```bash
eas build -p android --profile preview
```

## Description des fichiers et leurs rôles

1. [App.tsx](./App.tsx): Point d'entrée principal de l'application. Configure le contexte global et le thème.
2. [src/components/](./src/components/):
   - [CustomModal.tsx](./src/components/CustomModal.tsx): Composant de modal personnalisé.
   - [MealPlanItem.tsx](./src/components/MealPlanItem.tsx): Composant pour afficher un repas planifié dans le calendrier.
   - [RecipeCard.tsx](./src/components/RecipeCard.tsx): Composant pour afficher une recette dans la liste.
   - [SelectComponent.tsx](./src/components/SelectComponent.tsx): Composant de sélection réutilisable (par exemple, pour la catégorie de recette).
   - [ShoppingListItem.tsx](./src/components/ShoppingListItem.tsx): Composant pour afficher un élément de la liste de courses.
3. [src/screens/](./src/screens/): Contient tous les écrans principaux de l'application.
   - AddRecipeScreen.tsx: Écran pour ajouter une nouvelle recette.
   - [CalendarScreen.tsx](./src/screens/CalendarScreen.tsx): Écran pour afficher le calendrier des repas.
   - [MealPlanEditScreen.tsx](./src/screens/MealPlanEditScreen.tsx): Écran pour éditer un plan de repas.
   - MealPlannerScreen.tsx: Écran pour planifier les repas.
   - [RecipeDetailScreen.tsx](./src/screens/RecipeDetailScreen.tsx): Écran pour afficher les détails d'une recette.
   - [RecipesScreen.tsx](./src/screens/RecipesScreen.tsx): Écran pour afficher la liste des recettes.
   - [SettingsScreen.tsx](./src/screens/SettingsScreen.tsx): Écran pour les paramètres de l'application.
   - [ShoppingListScreen.tsx](./src/screens/ShoppingListScreen.tsx): Écran pour afficher la liste de courses.
4. [src/navigation/AppNavigator.tsx](./src/navigation/AppNavigator.tsx): Configuration de la navigation par onglets et des piles de navigation.
5. [src/hooks/](./src/hooks/):
   - [useTheme.ts](./src/hooks/useTheme.ts): Hook personnalisé pour gérer le thème (y compris le mode sombre).
   - [useDatabase.ts](./src/hooks/useDatabase.ts): Hook pour interagir avec la base de données locale (AsyncStorage).
6. [src/context/AppContext.tsx](./src/context/AppContext.tsx): Contexte global de l'application pour la gestion de l'état.
7. [src/utils/](./src/utils/): Contient des utilitaires pour la génération de plans de repas, le parsing de recettes, et la génération de listes de courses.
   - [mealPlanGenerator.ts](./src/utils/mealPlanGenerator.ts): Utilitaire pour générer des plans de repas amélioré.
   - [recipeParser.ts](./src/utils/recipeParser.ts): Utilitaire pour parser les recettes.
   - [shoppingListGenerator.ts](./src/utils/shoppingListGenerator.ts): Utilitaire pour générer des listes de courses.
8. [src/types/index.ts](./src/types/index.ts): Définitions des types TypeScript pour l'application.
9. [src/constants/](./src/constants/): Contient les constantes de l'application, y compris les thèmes et les données par défaut.
   - [Theme.ts](./src/constants/Theme.ts): Définitions des thèmes clair et sombre.
   - [Database.ts](./src/constants/Database.ts): Définitions des données par défaut et des constantes de la base de données.
   - [RecipesPreset.ts](./src/constants/RecipesPreset.ts): Recettes par défaut pour l'application.

## Fonctionnalités principales

- Gestion des recettes (CRUD)
- Planification des repas sur un calendrier
- Génération automatique de liste de courses basée sur les repas planifiés
- Mode sombre / clair
- Importation de recettes à partir de texte
- Persistance des données avec AsyncStorage
- Génération automatique de plans de repas équilibrés
- Interface utilisateur intuitive et réactive
- Gestion des catégories de recettes
- Adaptation des quantités des recettes en fonction du nombre de personnes
- Possibilité de déboguer et réinitialiser le stockage depuis les paramètres

## Technologies utilisées

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [TypeScript](https://www.typescriptlang.org/)

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.