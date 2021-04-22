//import { httpInteceptProviders } from './interceptorss/iindex';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Leftsideb1Component } from './leftsideb1/leftsideb1.component';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
//import { MatToolbarModule } from '@angular/material/toolbar';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DropdownModule} from 'primeng/dropdown';
import { EmpComponent } from './emp/emp.component';
import { ResolverService } from './emp/resolver.service'
import { RouterModule } from '@angular/router';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Leftsideb1Component,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    TableModule,
    RouterModule.forRoot([
      { path: '', component: Leftsideb1Component },
      { path: 'emp', component: EmpComponent, resolve: { emp: ResolverService } },

    ]),
    PaginatorModule,
    BrowserAnimationsModule,
    DropdownModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
      
  ],
  providers: [
    //httpInteceptProviders
  EmpComponent, ResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
