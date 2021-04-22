import { Injectable } from '@angular/core';
import { Emp } from './emp.model';
import { EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable()
export class EmpsService {
  
  isEmpLoggedIn: any;
  
  
  constructor( private http: HttpClient) {}
  empSelected = new EventEmitter<Emp>();
  public emps: Emp[]= [ 
    { empID: 1, name: "ABC", cnumber: 8834567890, dob: "1991-1-1", address: "Pune" }, 
    { empID: 2, name: "XYZ", cnumber: 9834567800, dob: "1992-2-2", address: "Pune" } 
  ];

  
  getEmp() {
    return this.emps.slice();
  }
  
  // deleteEmp(empID: number){
  //   const i = this.emps.findIndex(e => empID === this.id);
  //   if(i !== -1){
  //     this.emps.splice(i, 1);
  //   }
  // }
  
  //  getEmps() {
  //    return this.empss.slice();
  //   }
  // deleteEmp(){
  //   return this.emps.splice(1);
  // }
  // delete(empID): Observable<any> {
  //   return this.httpClient.delete('empID');
  // }
}
