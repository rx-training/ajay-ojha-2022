import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { DemoComponent } from './demo/demo.component';
import { FormsdemoComponent } from './formsdemo/formsdemo.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlformComponent } from './htmlform/htmlform.component';
import { RhtmlresumeComponent } from './rhtmlresume/rhtmlresume.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GreetingComponent,
    InfoComponent,
    DemoComponent,
    FormsdemoComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent,
    HtmlformComponent,
    RhtmlresumeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
