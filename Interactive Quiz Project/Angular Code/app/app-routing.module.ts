import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorFoundComponent } from './error-found/error-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutQwComponent } from './about-qw/about-qw.component';
import { HtmlQuizComponent } from './html-quiz/html-quiz.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { AnswersComponent } from './answers/answers.component';
import { HtmlAnsComponent } from './html-ans/html-ans.component';
import { JsAnsComponent } from './js-ans/js-ans.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'createQuiz',component:CreateQuizComponent},
  {path:'answers',component:AnswersComponent},
  {path:'htmlAns',component:HtmlAnsComponent},
  {path:'jsAns',component:JsAnsComponent},
  { path:'home',
    component:HomeComponent,
    children:[
      {path:'categories',component:CategoriesComponent,
      children:[
        {path:'html',component:HtmlQuizComponent},
        {path:'css',component:CssComponent},
        {path:'js',component:JsComponent},
      ]},
      {path:'aboutQW',component:AboutQwComponent},
    ],},
  
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',component:ErrorFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
