import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private goals = new BehaviorSubject<any>([' initial goal', 'another goal']);

  goal = this.goals.asObservable();
  constructor() { }


  changeGoal(goal) {
    this.goals.next(goal);

  }
}
