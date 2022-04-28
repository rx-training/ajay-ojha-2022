import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CssComponent } from './css/css.component';
import { HtmlComponent } from './html/html.component';
import { HtmlformComponent } from './htmlform/htmlform.component';
import { ProductsComponent } from './products/products.component';
import { RhtmlresumeComponent } from './rhtmlresume/rhtmlresume.component';

const routes: Routes = 
[
  {path:"products/:id",component:ProductsComponent},
  {path:"html",component:HtmlComponent,children:[
  {path:"htmlForm",component:HtmlformComponent},
  {path:"htmlResume",component:RhtmlresumeComponent}

]},{path:"css",component:CssComponent},{path:"bootstrap",component:BootstrapComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
