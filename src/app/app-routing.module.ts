import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { FourthComponent } from './fourth/fourth.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent ,
  children: [
    {
      path: ':first-child',
      component: FirstChildComponent
    }
  ]

  },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: '', component: FirstComponent },
  { path: '**', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

