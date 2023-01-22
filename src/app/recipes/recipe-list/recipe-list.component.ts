import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('a test recipe', 'recipe', 'https://4.bp.blogspot.com/-U8tjYIOhwr4/UXqCnFfBH0I/AAAAAAAAE04/oLQz2T0rivc/s1600/www.easyvn.net--24-food-wallpapers--009.jpg'
    )
  ]
  constructor() {
    
  }

}
