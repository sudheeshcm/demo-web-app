import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})
export class CustomizeComponent implements OnInit {

  constructor() { }

  public firstItemClicked: boolean = false;
  public secondItemClicked: boolean = false;

  ngOnInit() {
  }

  public expandItem(itemNumber: number) {
    if (itemNumber === 1) {
      this.firstItemClicked = !this.firstItemClicked;
    } else if(itemNumber === 2) {
      this.secondItemClicked = !this.secondItemClicked;
    }
    console.log('insider');
    
  }

}
