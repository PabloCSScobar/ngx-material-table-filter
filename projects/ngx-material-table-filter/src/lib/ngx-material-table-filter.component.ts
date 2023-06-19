import { Component, Host } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { NgxMaterialTableFilterService } from './ngx-material-table-filter.service';
import { MtxPopover } from '@ng-matero/extensions/popover';

@Component({
  selector: 'mtf-ngx-material-table-filter',
  templateUrl: './ngx-material-table-filter.component.html',
  styleUrls: ['./ngx-material-table-filter.component.scss']
})
export class NgxMaterialTableFilterComponent {
  columnFilter: string = '';

  get datasource() {
    return this.table.dataSource as MatTableDataSource<any, any>;
  }
  constructor(
    @Host() private table: MatTable<any>,
    @Host() private column: MatColumnDef,
    private filterService: NgxMaterialTableFilterService
  ) {
    this.datasource.filterPredicate = this.filterService.setFilterPredicate();
  }

  
  changeFilter(popover: MtxPopover) {
    this.datasource.filter = this.filterService.updateFilter(
      this.datasource.filter,
      this.column.name,
      this.columnFilter
    );
    popover.closed.emit();
  }

  clearColumn(popover: MtxPopover) {
    this.columnFilter = '';
    this.datasource.filter = this.filterService.clearFilter(
      this.datasource.filter,
      this.column.name,
    );
    popover.closed.emit();
  }

  isFilterActiveForColumn() {
    return this.filterService.isFilterActiveForColumn(this.datasource.filter, this.column.name);
  }
}
