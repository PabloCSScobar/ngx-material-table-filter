import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialTableFilterComponent } from './ngx-material-table-filter.component';

describe('NgxMaterialTableFilterComponent', () => {
  let component: NgxMaterialTableFilterComponent;
  let fixture: ComponentFixture<NgxMaterialTableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialTableFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMaterialTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
