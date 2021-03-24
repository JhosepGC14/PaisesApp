import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/Country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const url = `${this.apiURL}/all`;
    return this.http.get<Country[]>(url);
  }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${query}`;
    return this.http.get<Country[]>(url);
    // return this.http.get(url).pipe(catchError((err) => of([])));
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }

  searchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${query}`;
    return this.http.get<Country[]>(url);
  }

  detailCountry(idCountry: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${idCountry}`;
    return this.http.get<Country>(url);
  }
}
