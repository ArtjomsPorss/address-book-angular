import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookEntriesComponent } from './address-book-entries.component';

describe('AddressBookEntriesComponent', () => {
  let component: AddressBookEntriesComponent;
  let fixture: ComponentFixture<AddressBookEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressBookEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
