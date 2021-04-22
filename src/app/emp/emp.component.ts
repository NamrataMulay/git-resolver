import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../users';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public cust:Customer;
  id: number;
  public users: any[] = [];


  constructor(private route: ActivatedRoute,
     private customerService: CustomerService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params => {
       this.id = +params['id']; 
       this.getCustomerById(this.id);
      
    });
    //this.users = this.route.snapshot.data.users;

  }
 

  getCustomerById(id: number){
   // this.cust=[];
  this.customerService.getCustomerById(id).subscribe(
    (res: any) => {
      //console.log("Cust Data"+JSON.stringify(res.data));
      
      this.cust = res.data[0];
      //this.id = res.data[0].id;
      //this.totalRecords = this.cust.length;
      //this.CustomerCounter = this.cust.length;
      //console.log(this.cust);
      //console.log(this.id);
      //this.age=this.id;
    }
  );
  //console.log("hi"+this.cust);

  }

}
