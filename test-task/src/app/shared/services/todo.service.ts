import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  params: HttpParams;

  constructor(private http: HttpClient) { 
    this.params = new HttpParams().set('Content-Type', 'application/json');
  }

  getTodos(api: string) : Observable<any> {  
    return this.http.get(api);
  }

  postTodo(api: string, todo: Todo) : Observable<any> {  
    return this.http.post(api, todo);
  }

  updateTodo(api: string, todo: Todo) : Observable<any> {  
    return this.http.put(api, todo);
  }

  deleteTodo(api: string) : Observable<any> {  
    return this.http.delete(api);
  }
}
