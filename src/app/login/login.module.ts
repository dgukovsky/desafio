import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
     ],
    declarations: [LoginComponent]
})
export class LoginModule {}
