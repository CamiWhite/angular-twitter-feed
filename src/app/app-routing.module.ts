import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotComponent } from './modules/plot/plot.component';


const routes: Routes = [
  {path: 'plot', component: PlotComponent },
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
