import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'code'];

  dataSource = [];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getEmployees().subscribe((employees) => {
      this.dataSource= employees;
    }, error => {
      this.dataSource = [{"name" : "I don't think so!", "age": 0, "code" : "nope nope nope"}];
    });
  }
}
