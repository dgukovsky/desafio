import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanCuentasComponent } from './plan-cuentas.component';
import { PlanCuentasRoutingModule } from './plan-cuentas-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PlanCuentasRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  declarations: [PlanCuentasComponent]
})
export class PlanCuentasModule { }
