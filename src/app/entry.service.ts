import { Injectable } from '@angular/core'
import { Entry } from './entry'
import { ENTRIES} from './mock-entries'
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // ,
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EntryService {


  updateEntry(entry: Entry) : Observable<Entry> {
    return this.http.post<Entry>(this.updateEntryUrl, entry);
  }

  
  private updateEntryUrl = 'server/update';
  private getAllEntriesUrl = 'server/all';
  private getEntryById = 'server/detail/';
  
  constructor(private http: HttpClient) { }
  
  getAllEntries() : Observable<Entry[]> {
    return this.http.get<Entry[]>(this.getAllEntriesUrl);
    // return of(ENTRIES);
  }

  getEntry(id: number) {
    return this.http.get<Entry>(this.getEntryById + id);
  }

}
