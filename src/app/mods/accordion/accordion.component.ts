import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: any[] = [];
  openedItemIndex: null | number = null;

  constructor() {}

  ngOnInit(): void {}

  openItem(index: number) {
    if (index === this.openedItemIndex) return (this.openedItemIndex = null);
    return this.openedItemIndex = index;
  }
}
