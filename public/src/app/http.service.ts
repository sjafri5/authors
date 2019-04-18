import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}

  getAllAuthors(){
    return this._http.get('/authors')
  }

  addAuthor(newAuthor){
    return this._http.post('/create', newAuthor)
  }
}
