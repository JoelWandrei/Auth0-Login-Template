import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  PingApi()
  {
    return this.http.get("http://localhost:64845/ping");
  }
}
