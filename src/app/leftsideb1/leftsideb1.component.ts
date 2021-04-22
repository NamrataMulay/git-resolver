import { EmpComponent } from './../emp/emp.component';
import { Emp } from './../emp/emp.model';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../users';
//import { TranslocoService } from '@ngneat/transloco';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../languages.1';
//import { Languages } from '../languages.1';
import { PrimeNGConfig } from 'primeng/api';
//import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
//import { EmpComponent } from './emp/EmpComponent';

@Component({
  selector: 'app-leftsideb1',
  templateUrl: './leftsideb1.component.html',
  styleUrls: ['./leftsideb1.component.css'],
  providers: [MessageService]

})
export class Leftsideb1Component implements OnInit {
  dataList: Array<any> = [];
  customers: Customer[];
  cust: Customer[];

  totalRecords: number;
  selectedProduct1: Customer;
  //products: Products[];
  languages: Languages[];
  selectedLang1: Languages;
  product_id: string;
  //customers_id: number;

  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    //private translocoService: TranslocoService,
    private messageService: MessageService,
    public translate: TranslateService,
    private config: PrimeNGConfig
  ) {

    // this.customers_id = this.actRoute.snapshot.params.id;
    // this.actRoute.paramMap.subscribe(params => {
    //   this.customers = params.get('customers_id');
    // });



    translate.addLangs(['en', 'fr', 'hi']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|hi/) ? browserLang : 'en');

    this.dataList = [
      { code: 1, name: "1st Review" },
      { code: 2, name: "Draft" },
      { code: 3, name: "Approved" }
    ]
  }

  ngOnInit(): void {

    this.config.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',

    });
    this.customerService.getCustomer().subscribe(
      (res: any) => {
        this.customers = res.data;
        this.totalRecords = this.customers.length;
        //this.CustomerCounter = this.customers.length;
        console.log(this.customers);
      }
    );



  }
  // save(){
  //   if(this.dataList == dataList){
  //     alert("Custom filter is created");
  //   }else{
  //     alert("Please select filter to create custom filter");
  //   }
  // }

  selectProduct(product: Customer) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
  }

  onRowSelect(event) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }

  onRowUnselect(event) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }

  onRowClick(id: number) {
    console.log(id);
    // this.router.navigateByUrl('/emp?id='+id);
    this.router.navigate(['/emp/'+id]);
    //this.empc.getCustomerById(id);
  }
}

//  this.router.navigateByUrl('/emp?id='+id);
//  this.router.navigate(['/emp/', this.cust.id]);
//  this.router.snapshot.paramMap.get('id');
//  this.empc.getCustomerById(id);