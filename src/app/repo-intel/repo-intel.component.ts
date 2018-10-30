import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-intel',
  templateUrl: './repo-intel.component.html',
  styleUrls: ['./repo-intel.component.css']
})
export class RepoIntelComponent implements OnInit {
  @Input() repos: Repo;

  constructor() { }

  ngOnInit() {
  }

}
