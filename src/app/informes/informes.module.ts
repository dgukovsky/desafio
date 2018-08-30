import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformesComponent } from './informes.component';
import { InformesRoutingModule } from './informes-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    InformesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatRadioModule,
    MatTabsModule

  ],
  declarations: [InformesComponent]
})
export class InformesModule { }
