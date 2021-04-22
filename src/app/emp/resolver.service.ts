import { HttpClient } from '@angular/common/http';
import { CustomerService } from './../customer.service';
import {Injectable} from "@angular/core"
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()

export class ResolverService implements Resolve<any> {

    constructor(private CustomerService:CustomerService, private HttpClient:HttpClient) {}

    resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<any>{
        console.log('Logging collected route Parameter', route.params['name']);
       return this.CustomerService.getCustomer();
    }
} 