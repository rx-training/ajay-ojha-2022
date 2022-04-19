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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GreetingComponent,
    InfoComponent,
    DemoComponent,
    FormsdemoComponent,
   
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
