import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { BackendService } from '../backend.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  result: string;
  private sub: any;

  constructor(private backendService: BackendService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      const term = params['q'];
      if(term){
        this.search(term);
      }
    });
  }

  getResultHTMLValue() {
    return this.sanitizer.bypassSecurityTrustHtml(this.result);
  }

  onSearchClicked() {
    this.search(this.searchValue);
  }

  search(term: string) {
    this.backendService.searchEmployee(term).subscribe((results) => {
      this.result = results;
      console.log('result: ' + this.result);
    });
  }
}
