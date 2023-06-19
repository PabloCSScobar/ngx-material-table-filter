import { NgModule } from '@angular/core';
import { NgxMaterialTableFilterComponent } from './ngx-material-table-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxPopoverModule } from '@ng-matero/extensions/popover';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NgxMaterialTableFilterComponent
  ],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MtxPopoverModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    NgxMaterialTableFilterComponent
  ]
})
export class NgxMaterialTableFilterModule { }
