import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];

  constructor(
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this.getAllAuthors()
  }

  getAllAuthors(){
    let tempObservable = this._httpService.getAllAuthors();
    tempObservable.subscribe(data => {
      console.log("Got all the authors!", data['data']);
      this.authors = data['data']

    });
  }
}
