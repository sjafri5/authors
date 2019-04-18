import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router  } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor = { name: '' }
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
  }

  onAddAuthor(){
    console.log('1', this.newAuthor)
    let tempObservable = this._httpService.addAuthor(this.newAuthor);
    tempObservable.subscribe(data => {
      console.log("Got authors!", data);
      this._router.navigate(['/']);
    });
  }
}
