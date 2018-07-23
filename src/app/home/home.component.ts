import { Component, OnInit } from '@angular/core';
import { HomeService} from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goalText: string;
  goals = [];
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this.homeService.changeGoal(this.goals);


  }
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.goal.subscribe(res => this.goals = res);
    this.homeService.changeGoal(this.goals);
  }

}
