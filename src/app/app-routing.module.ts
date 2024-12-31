import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlBasicComponent } from './html-basic/html-basic.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  { path: 'practice', component: PracticeComponent },
  { path: 'htmlBasic', component: HtmlBasicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
