import { Component, ViewChild, Input, Renderer2, forwardRef } from '@angular/core';
import { Regex } from '../constant/regex.constant';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExtendedComponent),
  multi: true,
};

@Component({
  selector: 'ng-textarea-extended',
  templateUrl: './textarea-extended.component.html',
  styleUrls: ['./textarea-extended.component.css'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR],
})
export class TextareaExtendedComponent  {

  @ViewChild('textarea', {static: false}) textarea;
  @Input() elementId: string;
  textareaValue: string;
  onChange;
  onTouch;

  constructor( private renderer: Renderer2 ) {}

  writeValue(value: any ): void {
    this.textareaValue = value;
  }

  registerOnTouched(fn: any ): void {
    this.onTouch = fn;
  }

  registerOnChange(fn: any ): void {
    this.onChange = fn;
  }

  change(event) {
    this.onChange(this.reverseParse(event.target.innerHTML));
  }

  setDisabledState(enablePopover: boolean): void {
    const div = this.textarea.nativeElement;
    const action = enablePopover ? 'removeClass' : 'addClass';
    this.renderer[action](div, 'disabled');
  }

  reverseParse(innerHTML) {
    if (innerHTML.match(Regex.reverseTransform.boldRegex)) {
      innerHTML = this.reverseToBold(innerHTML);
    }
    if (innerHTML.match(Regex.reverseTransform.italicRegex)) {
      innerHTML = this.reverseToItalic(innerHTML);
    }
    return innerHTML;
  }

  reverseToBold(innerHTML) {
    const matches = innerHTML.match(Regex.reverseTransform.boldRegex);
    if (matches) {
      innerHTML = innerHTML.replace(/<b>|<b (.*?)>|<\/b>/gi, '@');
    }
    return innerHTML;
  }

  reverseToItalic(innerHTML) {
    const matches = innerHTML.match(Regex.reverseTransform.italicRegex);
    if (matches) {
      innerHTML = innerHTML.replace(/<i>|<i (.*?)>|<\/i>/gi, '%');
    }
    return innerHTML;
  }

}
