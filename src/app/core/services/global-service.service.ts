import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BaseService} from '../services/base.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService extends BaseService {

  U;
  constructor(private http: HttpClient) {
    super();
   }

  buscarPorId(id: string): Observable<any>{
        const url = `${this.URL}/${id}`;
        return this.http.get<any>(url);
  }

  buscarPorNome(nome: string): Observable<any>{
    const url = `${this.URL}?name=${nome}`;
    return this.http.get<any[]>(url);
  }

  listarTodosCards(): Observable<any> {
    return this.http.get<any>(`${this.URL}`).pipe(
              catchError(super.serviceError)
    );
  }


}
