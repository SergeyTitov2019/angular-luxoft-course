import { Component, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})

export class NewComponentComponent implements OnInit {

  notes: Array<Note> = [
    {text: 'Text 1'},
    {text: 'Text 2'},
    {text: 'Text 3'},
    {text: 'Text 4'},
  ]

  private notesUrl = 'http://localhost:8080/notes';

  // public http = new HttpClient;


  constructor() { }

  ngOnInit(): void {
  }

  remove(i: any): void {
    this.notes.splice(i, 1)
  }

  // getNotes(): Observable<Array<Note>> {
  // return this.http.get<Array<Note>>(this.notesUrl);
// }
}
