import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html",
    styleUrls: ["./recipes.component.css"]
})

export class RecipesComponent {

    recipeElement: Recipe;

    setRecipe(recipe: Recipe) {
        this.recipeElement = recipe;
    }

    getRecipe() {
        return this.recipeElement;
    }
}