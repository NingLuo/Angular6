import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';


@Component({
  templateUrl: './list-emplyees.component.html',
  styleUrls: ['./list-emplyees.component.css']
})
export class ListEmplyeesComponent implements OnInit {
  employees: Employee[] = null;
  constructor(private _employeeService: EmployeeService) {
    this.employees = this._employeeService.getEmployees();
  }

  ngOnInit() {
  }
}
