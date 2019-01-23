// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, Config } from '../../modules/core/index';
import { IAppState, getNames } from '../../modules/ngrx/index';
import { NameList } from '../../modules/sample/index';
import { Http, RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';

// class  Customer {

//   customer_ID : string;
  
//   customer_Name: string;
  
//   email: string;
  
//   mobile: string;
  
// }
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  public names$: Observable<any>;
  public newName: string;
  // public customer : Customer;
  private http: Http;

  constructor(private store: Store<IAppState>, public routerext: RouterExtensions) {
    console.log("Hello World");
    console.dir({
      Name:"Rakesh",
      Mobile:"9967452030"
    });
  }

  ngOnInit() {
    this.names$ = this.store.let(getNames);
    this.newName = '';
  }

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.store.dispatch(new NameList.AddAction(this.newName));
    this.newName = '';
    return false;
  }

  // addName (body: Object): Observable<Customer> {
  //   var API_URL = NameList.APIURL;
  //   var Access_token = NameList.Access_Token;
  //   let bodyString = JSON.stringify(body); // Stringify payload
  //   let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //   let options       = new RequestOptions({headers:headers}); //RequestOptions({ headers: headers }); // Create a request option

  //   return this.http.post(API_URL + 'Customers?access_token=' + Access_token, body, options) // ...using post request
  //                    .map(function(res){

  //                    }) // ...and calling .json() on the response to return data
  //                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  // }  

  readAbout() {
    // Try this in the {N} app
    // {N} can use these animation options
    this.routerext.navigate(['/about'], {
      transition: {
        duration: 1000,
        name: 'slideTop',
      }
    });
  }
}
