import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MunicipioCrudService {

  constructor(private http: HttpClient) { }

  carregar(id: number) {
    const url = `${environment.apiURL}/municipio/${id}`;
    return this.http.get<any>(url).pipe(
      tap(
        resultado => {
          return of(resultado);
        }
      )
    );
  }

  incluir(municipio: any) {
    const url = `${environment.apiURL}/municipio`;
    return this.http.post<any>(url, municipio).pipe(
      tap(
        resultado => {
          return of(resultado);
        }
      )
    );
  }

  atualizar(municipio: any) {
    const url = `${environment.apiURL}/municipio`;
    return this.http.put<any>(url, municipio).pipe(
      tap(
        resultado => {
          return of(resultado);
        }
      )
    );
  }

  deletar(id: number) {
    const url = `${environment.apiURL}/municipio/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(
        resultado => {
          return of(resultado);
        }
      )
    );
  }

}
