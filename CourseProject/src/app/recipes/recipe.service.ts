import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class RecipeService {
    recipesChange = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else do you need to say?',
            'http://smokeybones.com/wp-content/uploads/2015/11/loaded-bbq-burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChange.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChange.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChange.next(this.recipes.slice());
    }
}
