import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {Form} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class GeneralService {

  private hostUrl: string = 'http://localhost:8000';

  constructor(public router: Router, private readonly httpClient: HttpClient) {}

  public testApiCall(): Observable<any> {
    return this.httpClient.get<string>(this.hostUrl, {
      observe: 'response',
    });
  }

  imagePr(formData: FormData): Observable<any> {
    return this.httpClient.post<string>(`${this.hostUrl}media/image`, {
      formData: formData
    })
  }

  videoPr(formData: FormData): Observable<any> {
    return this.httpClient.post<string>(`${this.hostUrl}media/video`, {
      formData: formData
    })
  }
}
