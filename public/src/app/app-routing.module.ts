import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { NewComponent  } from './new/new.component';

const routes: Routes = [
    { path: 'new', component: NewComponent  },
    { path: '', component: HomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
