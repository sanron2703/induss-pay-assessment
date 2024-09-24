import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  baseApi: string = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile'
  constructor( private http:HttpClient) { }

  createContacts(data:any): Observable<any>{
    return this.http.post(this.baseApi,data)
  }

  getContactList(): Observable<any>{
    return this.http.get(this.baseApi)
  }

  updateContactDetails(data:any): Observable<any>{
    return this.http.put(this.baseApi,data)
  }

  deleteContactDetail(contactId:string): Observable<any>{
    return this.http.delete(`${this.baseApi}/${contactId}`)
  }
}
