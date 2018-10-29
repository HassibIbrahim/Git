import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from '../git.service';





@Component({
  selector: 'app-gh',
  templateUrl: './gh.component.html',
  styleUrls: ['./gh.component.css'],
  providers: [GitService]
})
export class GhComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
