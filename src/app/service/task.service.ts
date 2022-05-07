import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/Task';
import { TASKS } from '../components/mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(): Observable <Task[]> {
    const tasks = of (TASKS);
    return tasks
  }
}
