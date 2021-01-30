import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
export abstract class BaseService {

    protected URL = environment.apiUrl;
   protected extractData(response: any){
       return response.data || {};
   }

   protected serviceError(response: Response | any){
    const customError: string[] = [];

    if (response instanceof HttpErrorResponse) {

        if (response.statusText === 'Unknown Error') {
            customError.push('Ocorreu um erro desconhecido');
            response.error.errors = customError;
        }
    }

    console.error(response);
    return throwError(response);
}
}
