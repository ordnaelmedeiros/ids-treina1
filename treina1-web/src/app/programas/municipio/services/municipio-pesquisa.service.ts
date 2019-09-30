import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class MunicipioPesquisaService {

  constructor(private http: HttpClient) { }

  listarUFs(): Observable<any[]> {
    const url = `${environment.apiURL}/municipio/uf/tudo`;
    return this.http.get<any[]>(url).pipe(
      tap(
        ufs => {
          return of(ufs);
        }
      )
    );
  }

  pesquisar(valor: any, pagina = 1): Observable<any> {
    const url = `${environment.apiURL}/municipio/pesquisa`;
    const args = {
      valor
    };
    return this.http.get<any>(url).pipe(
      tap(
        resultado => {
          return of(resultado);
        }
      )
    );
  }
}
