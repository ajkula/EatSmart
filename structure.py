
import os

project_structure = {
    'src': {
        'components': ['RecipeCard.tsx', 'MealPlanItem.tsx', 'ShoppingListItem.tsx'],
        'screens': ['CalendarScreen.tsx', 'RecipesScreen.tsx', 'ShoppingListScreen.tsx', 'RecipeDetailScreen.tsx', 'MealPlanEditScreen.tsx'],
        'navigation': ['AppNavigator.tsx'],
        'hooks': ['useTheme.ts', 'useDatabase.ts'],
        'context': ['AppContext.tsx'],
        'utils': ['recipeParser.ts', 'shoppingListGenerator.ts'],
        'types': ['index.ts'],
        'constants': ['Theme.ts', 'Database.ts']
    }
}

def create_directory_contents(structure, current_path):
    for item, content in structure.items():
        new_path = os.path.join(current_path, item)
        if isinstance(content, list):
            os.makedirs(new_path, exist_ok=True)
            for file in content:
                open(os.path.join(new_path, file), 'a').close()
        else:
            create_directory_contents(content, new_path)

# Create project structure
create_directory_contents(project_structure, '.')

# Create App.tsx in the root
open('App.tsx', 'a').close()

print('Project structure created successfully!')