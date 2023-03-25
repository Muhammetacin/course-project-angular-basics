import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a simple test.", 
    "https://images.pexels.com/photos/4792402/pexels-photo-4792402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new Recipe("A Test Recipe 2", "This is a simple test 2.", 
    "https://images.pexels.com/photos/4792402/pexels-photo-4792402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  ];

  constructor() {}

  ngOnInit(): void {

  }
}
