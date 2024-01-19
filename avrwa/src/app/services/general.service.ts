import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  constructor(public router: Router, private readonly httpClient: HttpClient) {}

  public testApiCall(): Observable<any> {
    return this.httpClient.get<string>("http://localhost:8000/home", {
      observe: 'response',
    });
  }
}
