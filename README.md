# Structure du projet EatSmart

```
EatSmart/
├── src/
│   ├── components/
│   │   ├── RecipeCard.tsx
│   │   ├── MealPlanItem.tsx
│   │   └── ShoppingListItem.tsx
│   ├── screens/
│   │   ├── CalendarScreen.tsx
│   │   ├── RecipesScreen.tsx
│   │   ├── ShoppingListScreen.tsx
│   │   ├── RecipeDetailScreen.tsx
│   │   └── MealPlanEditScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useDatabase.ts
│   ├── context/
│   │   └── AppContext.tsx
│   ├── utils/
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
expo start
```

## Description des fichiers et leurs rôles

1. `App.tsx`: Point d'entrée principal de l'application. Configurera le thème, le contexte et la navigation.

2. `src/components/`:
   - `RecipeCard.tsx`: Composant pour afficher une recette dans la liste.
   - `MealPlanItem.tsx`: Composant pour afficher un repas planifié dans le calendrier.
   - `ShoppingListItem.tsx`: Composant pour afficher un élément de la liste de courses.

3. `src/screens/`:
   - `CalendarScreen.tsx`: Écran principal du calendrier avec les repas planifiés.
   - `RecipesScreen.tsx`: Liste des recettes avec barre de recherche.
   - `ShoppingListScreen.tsx`: Liste de courses avec cases à cocher.
   - `RecipeDetailScreen.tsx`: Détails d'une recette spécifique.
   - `MealPlanEditScreen.tsx`: Écran pour éditer les repas d'une journée spécifique.

4. `src/navigation/AppNavigator.tsx`: Configuration de la navigation par onglets et de la pile de navigation.

5. `src/hooks/`:
   - `useTheme.ts`: Hook personnalisé pour gérer le thème (y compris le mode sombre).
   - `useDatabase.ts`: Hook pour interagir avec la base de données locale.

6. `src/context/AppContext.tsx`: Contexte global de l'application pour la gestion de l'état.

7. `src/utils/`:
   - `recipeParser.ts`: Fonction pour parser les recettes importées au format texte.
   - `shoppingListGenerator.ts`: Fonction pour générer automatiquement la liste de courses.

8. `src/types/index.ts`: Définitions des types TypeScript pour l'application.

9. `src/constants/`:
   - `Theme.ts`: Définition du thème de l'application.
   - `Database.ts`: Constantes liées à la structure de la base de données.