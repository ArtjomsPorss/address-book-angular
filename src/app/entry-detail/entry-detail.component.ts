import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { EntryService } from "../entry.service";

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  @Input() entry : Entry;

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEntry();
  }

  getEntry() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.entryService.getEntry(id).subscribe(entry => this.entry = entry)
  }

}
