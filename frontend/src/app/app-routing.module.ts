import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormParamsComponent } from './componets/form-params/form-params.component';
import { HistoryComponent } from './componets/history/history.component'

const routes: Routes = [
  { path: '', component: FormParamsComponent},
  { path: 'history', component: HistoryComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
