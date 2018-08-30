import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://api-erp-dev.medinet.cl/rest-auth/login/', { username: username, password: password })
            .pipe(map(data => {
              
                if (data.key) {
                   localStorage.setItem('Authorization', JSON.stringify(data.key));
                }

                return data;
            }));
      }



    logout(): Observable<any> {
      if(this.getStorageVariable('Authorization')) {
        window.localStorage.removeItem('Authorization');
      }
      return of({message: 'Successfully logged out'});

    }

    private getStorageVariable(name) {
      return JSON.parse(window.localStorage.getItem(name));
    }

    getAccessToken() {
      return this.getStorageVariable('Authorization');
    }

    public isAuthenticated() {
      if(this.getStorageVariable('Authorization')) {
        return true;
      }
      else {
        return false;
      }
    }
}
