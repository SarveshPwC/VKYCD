import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiHandler {
  urlObject$: Observable<any>;

  constructor(private http: HttpClient,
  ) {
  }

  callApi(appUrl: string, method: string, data?: any, headers?: HttpHeaders,
                  params?: HttpParams): Observable<any> {

    switch (method.toLowerCase()) {
      case 'post':
        if (headers && params) {
          this.urlObject$ = this.http.post(appUrl, data, {headers, params});
        } else if (headers) {
          this.urlObject$ = this.http.post( appUrl, data, {headers});
        } else {
          this.urlObject$ = this.http.post( appUrl, data);
        }
        break;
      case 'get':
        if (headers) {
          this.urlObject$ = this.http.get(appUrl, {headers});
        } else {
          this.urlObject$ = this.http.get( appUrl);
        }
        break;
    }
    return this.urlObject$;
  }


}
