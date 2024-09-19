# Structure du projet EatSmart

```
EatSmart/
├── src/
│   ├── components/
│   │   ├── RecipeCard.tsx
│   │   ├── MealPlanItem.tsx
│   │   ├── SelectComponent.tsx
│   │   └── ShoppingListItem.tsx
│   ├── screens/
│   │   ├── AddRecipeScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   ├── MealPlanEditScreen.tsx
│   │   ├── MealPlannerScreen.tsx
│   │   ├── RecipeDetailScreen.tsx
│   │   ├── RecipesScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   ├── ShoppingListDetailScreen.tsx
│   │   └── ShoppingListScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useDatabase.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── utils/
│   │   ├── mealPlanGenerator.ts
│   │   ├── recipeParser.ts
│   │   └── shoppingListGenerator.ts
│   ├── types/
│   │   └── index.ts
│   └── constants/
│       ├── Theme.ts
│       └── Database.ts
├── App.tsx
├── app.json
└── package.json
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

1. `App.tsx`: Point d'entrée principal de l'application. Configure le contexte global et le thème.

2. `src/components/`:
   - `RecipeCard.tsx`: Composant pour afficher une recette dans la liste.
   - `MealPlanItem.tsx`: Composant pour afficher un repas planifié dans le calendrier.
   - `SelectComponent.tsx`: Composant de sélection réutilisable (par exemple, pour la catégorie de recette).
   - `ShoppingListItem.tsx`: Composant pour afficher un élément de la liste de courses.

3. `src/screens/`:
   - `AddRecipeScreen.tsx`: Écran pour ajouter ou modifier une recette.
   - `CalendarScreen.tsx`: Écran principal du calendrier avec les repas planifiés.
   - `MealPlanEditScreen.tsx`: Écran pour éditer les repas d'une journée spécifique.
   - `MealPlannerScreen.tsx`: Écran pour planifier les repas sur plusieurs jours.
   - `RecipeDetailScreen.tsx`: Détails d'une recette spécifique.
   - `RecipesScreen.tsx`: Liste des recettes avec barre de recherche.
   - `SettingsScreen.tsx`: Écran des paramètres de l'application.
   - `ShoppingListDetailScreen.tsx`: Détails d'un élément de la liste de courses.
   - `ShoppingListScreen.tsx`: Liste de courses avec cases à cocher.

4. `src/navigation/AppNavigator.tsx`: Configuration de la navigation par onglets et des piles de navigation.

5. `src/hooks/`:
   - `useTheme.ts`: Hook personnalisé pour gérer le thème (y compris le mode sombre).
   - `useDatabase.ts`: Hook pour interagir avec la base de données locale (AsyncStorage).

6. `src/context/AppContext.tsx`: Contexte global de l'application pour la gestion de l'état.

7. `src/utils/`:
   - `mealPlanGenerator.ts`: Fonction pour générer automatiquement des plans de repas.
   - `recipeParser.ts`: Fonction pour parser les recettes importées au format texte.
   - `shoppingListGenerator.ts`: Fonction pour générer automatiquement la liste de courses.

8. `src/types/index.ts`: Définitions des types TypeScript pour l'application.

9. `src/constants/`:
   - `Theme.ts`: Définition du thème de l'application.
   - `Database.ts`: Constantes liées à la structure de la base de données et données par défaut.

## Fonctionnalités principales

- Gestion des recettes (ajout, modification, visualisation)
- Planification des repas sur un calendrier
- Génération automatique de liste de courses basée sur les repas planifiés
- Mode sombre / clair
- Importation de recettes à partir de texte
- Persistance des données avec AsyncStorage

## Technologies utilisées

- React Native
- Expo
- React Navigation
- React Native Paper
- AsyncStorage pour la persistance des données
- TypeScript pour le typage statique