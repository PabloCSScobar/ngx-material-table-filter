import { Injectable } from "@angular/core";

type ColumnFilter = {
  isActive: boolean;
  value: string | null;
}

type TableFilter = {
  [key: string]: ColumnFilter;
}

@Injectable({
  providedIn: 'root'
})
export class NgxMaterialTableFilterService {  
  setFilterPredicate() {
    return (data: any, filter: string) => {
      const filterObject: TableFilter = JSON.parse(filter);
      for(const key in filterObject) {
        let item = data[key];
        if (item === null || item === undefined) {
          item = '';
        } else {
          item = item.toString();
        }
        if(filterObject[key].isActive && !item.includes(filterObject[key].value)) {
          return false;
        }
      }
      return true;
    }
  }

  updateFilter(currentFilter: string, column: string, filterValue: string) {
    const tableFilter: TableFilter = this.getFilterObject(currentFilter);
    tableFilter[column] = {
      isActive: true,
      value: filterValue
    }
    return JSON.stringify(tableFilter);
  }

  clearFilter(currentFilter: string, column: string) {
    const tableFilter: TableFilter = this.getFilterObject(currentFilter);
    tableFilter[column] = {
      isActive: false,
      value: null
    }
    return JSON.stringify(tableFilter);
    
  }

  isFilterActiveForColumn(currentFilter: string, name: string) {
    const tableFilter: TableFilter = this.getFilterObject(currentFilter);
    return tableFilter[name]?.isActive;
  }

  private getFilterObject(currentFilter: string) {
    try {
      return JSON.parse(currentFilter);
    } catch (error) {
      return {};
    }
  }
}