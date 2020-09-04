import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorFoundComponent } from './error-found/error-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutQwComponent } from './about-qw/about-qw.component';
import { HtmlQuizComponent } from './html-quiz/html-quiz.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { from } from 'rxjs';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AnswersComponent } from './answers/answers.component';
import { HtmlAnsComponent } from './html-ans/html-ans.component';
import { JsAnsComponent } from './js-ans/js-ans.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorFoundComponent,
    CategoriesComponent,
    AboutQwComponent,
    HtmlQuizComponent,
    CssComponent,
    JsComponent,
    CreateQuizComponent,
    AnswersComponent,
    HtmlAnsComponent,
    JsAnsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
