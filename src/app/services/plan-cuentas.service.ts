

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {isObject} from 'util';
import * as _ from 'lodash';

@Injectable()
export class PlanCuentasService {
  baseUrl: string;
  options: any;
  cuentas: any[];
  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) {
    this.baseUrl = 'http://api-erp-dev.medinet.cl/contabilidad/plan-cuentas/cuenta/max-level/';
    this.cuentas= [];
  }


  getCuentas (search?): Observable<any> {
    let paramSearch = search ? '?search=' + search : '';
    return this.http.get<any>(this.baseUrl + paramSearch, this.getOptions())
      .pipe(
        tap( response => {}),
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    return throwError(error);
  }

  getOptions () {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Accept': 'application/json',
        'Authorization': `Token ${this.auth.getAccessToken()}`
      }),
    };
  }
}
