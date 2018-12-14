import { Store } from '@ngrx/store';
import { SupplierService } from './suppliers.service';
import * as fromSuppliers from '../suppliers/store/suppliers.reducers';
import { Supplier } from './supplier.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['name', 'description', 'phoneNumber', 'address'];
  dataSource = new MatTableDataSource<Supplier>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private suppliersService: SupplierService,
              private store: Store<fromSuppliers.State>) { }

  ngOnInit() {
    this.store.select(fromSuppliers.getSuppliers)
      .subscribe((suppliers: Supplier[]) => {
        this.dataSource.data = suppliers;
      });
      this.suppliersService.getSuppliers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
