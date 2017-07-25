import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
})
export class ProgressBarComponent implements OnInit {
  progress: number= 0;
  
  ngOnInit(): void {
    setInterval(()=> {
      if (this.progress <= 100) {
        this.progress++;
      } else {
        this.progress = 0;
      }
    }, 100);
  }
}