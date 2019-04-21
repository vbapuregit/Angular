import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Todo } from '../model/todo';

const data = [
  {
    "id": 11,
    "title": "Pick up the milk",
    "date": "2019-04-17T14:00:00.000Z",
    "status": "In Progress"
  },
  {
    "id": 12,
    "title": "Walk the dog",
    "date": "2019-06-18T14:00:00.000Z",
    "status": "Not Started"
  },
  {
    "id": 13,
    "title": "Get the news paper",
    "date": "2019-06-04T14:00:00.000Z",
    "status": "Not Started"
  },
  {
    "id": 14,
    "title": "Read Article",
    "date": "2019-05-07T14:00:00.000Z",
    "status": "In Progress"
  }
];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  params: HttpParams;

  constructor(private http: HttpClient) { 
    this.params = new HttpParams().set('Content-Type', 'application/json');
  }

  getTodos(api: string) : Observable<any> {  
    // return this.http.get(api);
    return of(data);
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
