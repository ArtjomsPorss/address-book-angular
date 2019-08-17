import { Injectable } from '@angular/core'
import { Entry } from './entry'
import { ENTRIES} from './mock-entries'
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  
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
