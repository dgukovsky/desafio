import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService} from './services/auth.service';
import { PlanCuentasService} from './services/plan-cuentas.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from './services/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    PlanCuentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
