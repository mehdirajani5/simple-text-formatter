import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextSelectEvent, SelectionRectangle } from './directives/text-selection/text-selection.directive';

@Component({
  selector: 'ng-simple-formatter',
  templateUrl: './simple-formatter.component.html',
  styleUrls: ['./simple-formatter.component.css'],
})
export class SimpleFormatterComponent implements OnInit {

  @Input() text: string;
  @Input() className = '';
  @Input() elementId = 'simple-formatter';
  @Input() boldSymbol = '@';
  @Input() italicSymbol = '%';
  @Input() underlineSymbol = '$';
  @Input() autoTransform = true;

  @Output() formattedString = new EventEmitter();

  textFormatterForm: FormGroup;
  hostRectangle = null;
  host = true;

  constructor() { }

  ngOnInit() {
    this.initializeForm();
    this.textFormatterForm.setValue({text: this.text});
  }

  initializeForm() {
    this.textFormatterForm = new FormGroup({
      text: new FormControl('')
    });
  }

  prepareRectangle(event: TextSelectEvent) {
    console.log(event);
    if (!event.text) {
      this.hostRectangle = null;
      return;
    }
    this.hostRectangle = event.viewportRectangle;
  }

}
