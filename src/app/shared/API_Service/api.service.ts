import { Injectable } from '@angular/core';
import {baseURL} from '../../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

   }
   option = new HttpHeaders({'Content-Type':'application/json'})

   getService(url: any): Observable<any>{
    return this.http.get(baseURL+url,{ headers: this.option }).pipe(catchError(this.handleError));
   }
 
   postService(url: any,data: any): Observable<any>{
     return this.http.post(baseURL+url,data,{ headers: this.option }).pipe(catchError(this.handleError));
   }
 
   deleteService(url: any): Observable<any>{
     return this.http.delete(baseURL+url,{ headers: this.option }).pipe(catchError(this.handleError));
   }
 
   handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       errorMessage = `Error: ${error.error.message}`;  
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     return throwError(errorMessage);
   }
 
}
