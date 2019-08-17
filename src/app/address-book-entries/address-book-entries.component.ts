import { Component, OnInit } from '@angular/core';
import { Entry } from '../Entry';
import { ENTRIES } from '../mock-entries';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-address-book-entries',
  templateUrl: './address-book-entries.component.html',
  styleUrls: ['./address-book-entries.component.css']
})
export class AddressBookEntriesComponent implements OnInit {

  entries: Entry[];// = ENTRIES;

  // entry: Entry = {
  //   id: 1,
  //   name: 'Kyle Broflowski'
  // };

  // selectedEntry: Entry;

  // onSelect(entry: Entry): void {
  //   this.selectedEntry = entry;
  // }

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAllEntries().subscribe(entries => this.entries = entries);
  }

}
