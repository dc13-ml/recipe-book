import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Store } from '@ngrx/store';

import { Ingredient } from './../ingredients/ingredient.model';
import { IngredientService } from './ingredients.service';
import * as fromIngredients from '../ingredients/store/ingredients.reducers';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'category', 'imagePath'];
  dataSource = new MatTableDataSource<Ingredient>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ingredientService: IngredientService,
              private store: Store<fromIngredients.State>) {}

  ngOnInit() {
    this.store.select(fromIngredients.getIngredients)
      .subscribe((ingredients: Ingredient[]) => {
        this.dataSource.data = ingredients;
      });
      this.ingredientService.getIngredients();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
