import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { mainUrl } from "./config";


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllMenu(): Observable<object> {
    return this.http.get(mainUrl+ "/data/menu")
  }
}
