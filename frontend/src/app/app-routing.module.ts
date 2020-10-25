import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
