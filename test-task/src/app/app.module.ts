import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoService } from './shared/services/todo.service';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
