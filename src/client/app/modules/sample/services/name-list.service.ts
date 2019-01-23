// angular
import { Injectable } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';
import { Headers } from '@angular/http';
// libs
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from '../../analytics/index';

// module
import { NameList } from '../actions/index';

@Injectable()
export class NameListService extends Analytics {

  constructor(
    public analytics: AnalyticsService,
    private http: Http
  ) {
    super(analytics);
    this.category = NameList.CATEGORY;
  }

  getNames(): Observable<Array<string>> {
    // return this.http.get(`${Config.IS_MOBILE_NATIVE() ? '/' : ''}assets/data.json`)
    //   .map(res => res.json());
    var API_URL = NameList.APIURL;
    var Access_token = NameList.Access_Token;
    return this.http
    .get(API_URL + 'Customers?access_token=' + Access_token)
    .map(function(res){
      console.dir(res.json())
      var output =  res.json();
      var arr = new Array();
      output.forEach(function (value) {
        arr.push(value.customer_Name);
      });
     
      return arr;
    });
  }
}
