import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  isModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  set openModal(flag: boolean) {
    this.isModalOpen = flag;
  }

  toggleModal(): void {
    this.openModal = !this.isModalOpen;
  }
}
