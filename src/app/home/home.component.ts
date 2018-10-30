import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user: User;
  repos = [];
  viewRepo: Boolean = false;

  ngOnInit() {

    this.viewRepo = false;
  }

  viewAll() {
    this.repos.forEach(repo => {
      repo.display = true;
    });
  }

}
