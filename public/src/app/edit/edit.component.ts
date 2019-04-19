import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router  } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor = {name: ''}

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getAuthor(params['id'])
    });
  }

  getAuthor(id){
    let observable = this._httpService.getAuthor(id)
    observable.subscribe(resp => {
      this.editAuthor = resp['data']
      console.log('came back', this.editAuthor)
    })
  }

  onEditAuthor(){
    let observable = this._httpService.updateAuthor(this.editAuthor)
    observable.subscribe(resp => {
      console.log('saved update!!!!!!', resp)
      this._router.navigate(['/']);
    })
  }
}
