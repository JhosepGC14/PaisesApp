import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/Country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.eu/rest/v2';
  private httpParams = new HttpParams().set(
    'fields',
    'name;capital;alpha2Code;flag;population'
  );

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const url = `${this.apiURL}/all`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
    // return this.http.get(url).pipe(catchError((err) => of([])));
  }

  searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchRegion(query: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  detailCountry(idCountry: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${idCountry}`;
    return this.http.get<Country>(url);
  }
}
