import { Component, OnInit } from '@angular/core';
import { Entry } from "../entry";
import { EntryService } from "../entry.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAllEntries().subscribe(entries => this.entries = entries.slice(1,5));
  }

}
