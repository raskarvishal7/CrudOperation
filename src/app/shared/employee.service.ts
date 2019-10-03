import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  formData = Employee;

  readonly rootURL = "http://localhost:51248/api";

  constructor(private http : HttpClient) { }

  postEmployee(formData : Employee){
    return this.http.post(this.rootURL + '/Employee', formData);
  }
}
