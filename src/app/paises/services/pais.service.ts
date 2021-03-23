import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaisByName } from '../interfaces/PaisesByName.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<PaisByName[]> {
    const url = `${this.apiURL}/name/${query}`;
    return this.http.get<PaisByName[]>(url);
    // return this.http.get(url).pipe(catchError((err) => of([])));
  }
}
