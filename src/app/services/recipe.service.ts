import { EventEmitter } from "@angular/core";
import { Recipe } from "../components/recipes/recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is a simple test.", 
        "https://images.pexels.com/photos/4792402/pexels-photo-4792402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
        new Recipe("A Test Recipe 2", "This is a simple test 2.", 
        "https://images.pexels.com/photos/4792402/pexels-photo-4792402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    ];

    getRecipes() {
        //  slice(): returns an exact copy of the array
        return this.recipes.slice();
    }
}