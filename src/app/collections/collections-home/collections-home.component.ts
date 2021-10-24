import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 44, job: 'Agent', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: true },
    { name: 'Eylse', age: 33, job: 'Manager', employed: false },
  ];
  headers = [
    { key: 'employed', label: 'Is Employed' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
