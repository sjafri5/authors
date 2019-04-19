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

  getAuthor(id){
    console.log('service')
    return this._http.get('/authors/' + id)
  }

  updateAuthor(author){
    return this._http.put('/authors/' + author._id, author)
  }

  deleteAuthor(id){
    return this._http.delete('/authors/' + id)
  }

  addAuthor(newAuthor){
    return this._http.post('/create', newAuthor)
  }
}
