import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value = '';

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/search', this.value]);
  }
}
