import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit, OnDestroy {
  public currentTime: Date;
  public time: any;
  constructor() { }

  ngOnInit() {
    this.time = setInterval(() => {
      this.currentTime = new Date();
    }, 1000)
  }

  ngOnDestroy() {
    alert("Clearing the interval");
    clearInterval(this.time);
  }


}
