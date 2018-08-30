import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  result: string;
  private sub: any;

  constructor(private backendService: BackendService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const term = params['term'];
      this.search(term);
    });
  }

  search(term: string) {
    this.backendService.searchEmployee(term).subscribe((results) => {
      this.result = results;
    });
  }

}
