import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { TodoService } from '../shared/services/todo.service';
import { Todo } from '../shared/model/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  todoForm: FormGroup;
  id: number;

  statusValues: any[] = [
    {value: 'Done', viewValue: 'Done'},
    {value: 'In Progress', viewValue: 'In Progress'},
    {value: 'Not Started', viewValue: 'Not Started'}
  ];

  myFilter = (d: Date): boolean => {
    let today = new Date();
    let inputday = new Date(d);

    if(inputday.getFullYear() >= today.getFullYear()) {
      if(inputday.getFullYear() == today.getFullYear() && inputday.getMonth() == today.getMonth()) {
        return inputday.getDate() >= today.getDate();
      }

      if(inputday.getFullYear() == today.getFullYear() && inputday.getMonth() < today.getMonth()) {
        return false;
      }

      return true;
    }

    return false;

  }
  
  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private todoService: TodoService) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.id = +this.route.snapshot.queryParams['maxid'] + 1;
  }

  onSubmit() {
    let todo: Todo = {
      id: this.id,
      title: this.todoForm.value.title,
      date: this.todoForm.value.date,
      status: this.todoForm.value.status
    }

    this.todoService
        .postTodo('/api/todos', todo)
        .subscribe(success => {
          this.router.navigate(['../todo-list']);
        });
  }

}
