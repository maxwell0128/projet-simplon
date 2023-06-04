import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Personne } from './personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private lienURL : String;
  constructor(private httpClient: HttpClient) {
    this.lienURL ='http://localhost:8080/participant';
  }
  public findALL(): Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(`${this.lienURL}`);
  }
  public ajoutezpersonne(personne:Personne): Observable<object>{

    return this.httpClient.post(`${this.lienURL}`,personne)

  }
  public getpersonneById(id: number): Observable<Personne>{
    return this.httpClient.get<Personne>(`${this.lienURL}/${id}`);
  }

  public modifiezpersonne(id: number, personne: Personne): Observable<Object>{
    return this.httpClient.put(`${this.lienURL}/${id}`, personne);
  }
  public supprimezpersonne(id: number):Observable<object>{
    return this.httpClient.delete(`${this.lienURL}/${id}`);
  }
}
