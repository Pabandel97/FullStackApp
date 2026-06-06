import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ITechnology } from '../models/technology.model';

@Injectable({
  providedIn: 'root',
})
export class Http {

  private baseUrl: string = environment.apiUrl;

  constructor(private readonly _http: HttpClient){}

  public getTechnologies(){
    return this._http.get<ITechnology[]>(this.baseUrl + "/technologies")
  }

  public getTechnology(id:string){
    return this._http.get<ITechnology>(this.baseUrl + "/technology/" + id);
  }

  public searchTechnology(query: string){
    return this._http.get<ITechnology[]>(this.baseUrl + "/technology/search/" + query)
  }
}
