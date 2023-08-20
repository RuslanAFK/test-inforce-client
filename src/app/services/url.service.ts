import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import UrlInterface from '../interfaces/url.interface';
import UrlDetailsInterface from '../interfaces/url-details.interface';
import AddUrlInterface from '../interfaces/add-url.interface';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  link = "https://localhost:7178/api/Urls/";

  getAllUrls(){
    return this.http.get<Array<UrlInterface>>(this.link);
  }

  getUrlById(id: number, token: string) {
    return this.http.get<UrlDetailsInterface>(this.link + id, {headers: {
      "Authorization": `Bearer ${token}`
    }});
  }

  addUrl(post: AddUrlInterface, token: string) {
    return this.http.post<void>(this.link, post, {headers: {
      "Authorization": `Bearer ${token}`
    }});
  }

  deleteUrl(id: number, token: string) {
    return this.http.delete<void>(this.link + id, {headers: {
      "Authorization": `Bearer ${token}`
    }});
  }
}
