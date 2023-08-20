import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './login-view/login-view.component';
import { UrlInfoComponent } from './url-info/url-info.component';
import { UrlsTableViewComponent } from './urls-table-view/urls-table-view.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "", component: UrlsTableViewComponent},
  {path: "auth", component: LoginViewComponent},
  {path: "info/:id", component: UrlInfoComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
