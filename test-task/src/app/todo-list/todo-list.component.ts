import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import {map, finalize} from 'rxjs/operators';
import { Todo } from '../shared/model/todo';
import { TodoService } from '../shared/services/todo.service';
import {MatPaginator, MatTableDataSource, MatSort, MatFormField} from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, AfterViewInit {

  loading: boolean = true;
  isError: boolean = false;
  errorMsg: string;
  infoMsg: string;
  maxid: number;

  dataSource = new MatTableDataSource<Todo>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatFormField) filter: MatFormField;

  constructor(private todoService: TodoService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.todoService
        .getTodos('/api/todos')
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          data => {
            this.maxid = this.getMaxId(data);        

            this.dataSource.data = data;
            this.cdref.markForCheck();
          },
          fail => {
            this.isError = true;
            this.errorMsg = fail.error == null ? 'Failed to load Areas' : fail.error.message;
          });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(todo: Todo) {
    this.todoService.deleteTodo('/api/todos/' + todo.id)
        .subscribe(
            success => {
              this.infoMsg = 'Successfully deleted ' + todo.title;

              this.dataSource.data = this.dataSource.data.filter(_ => _.id != todo.id);
              this.cdref.markForCheck();
              this.maxid = this.getMaxId(this.dataSource.data);
            },
            fail => {
              this.isError = true;
              this.errorMsg = fail.error == null ? 'Failed to Delete Area' : fail.error.message;
            }
        );
  }

  getMaxId(data: any): number {
    let maxid = data.reduce((previousValue, currentValue) => {
      return (previousValue.id > currentValue.id) ? previousValue.id : currentValue.id
   });

   return maxid;
  }

}
