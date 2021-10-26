import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  isModalOpen = false;
  items = [
    {
      title: 'James Bond',
      content: 'British secret agent, going by the codename 007.',
    },
    {
      title: 'John Wick',
      content: 'John Wick was an orphan taken in by the Tarasov Russian Mafia and raised as an assassin.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  set openModal(flag: boolean) {
    this.isModalOpen = flag;
  }

  toggleModal(): void {
    this.openModal = !this.isModalOpen;
  }
}
