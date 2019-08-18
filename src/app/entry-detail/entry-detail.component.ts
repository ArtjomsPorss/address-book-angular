import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../entry';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { EntryService } from "../entry.service"
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {

  entryForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl('')
  });

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
    this.entryService.getEntry(id).subscribe(entry => this.setupEntry(entry));
  }
  
  setupEntry(entry: Entry){
    this.entryForm.get('id').setValue(entry.id);
    this.entryForm.get('name').setValue(entry.name);
    this.entryForm.get('surname').setValue(entry.surname);
  }

  onSubmit() {
    console.log(this.entryForm.value);

    this.entryService.updateEntry(this.entryForm.value).subscribe(entry => this.setupEntry(entry));
  }

}
