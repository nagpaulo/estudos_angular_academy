import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { from } from 'rxjs';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    HeaderComponent,
    StudentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
