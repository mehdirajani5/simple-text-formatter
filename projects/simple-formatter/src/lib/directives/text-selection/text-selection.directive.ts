import { Directive, ElementRef, NgZone, OnInit, Output, EventEmitter } from '@angular/core';

export interface TextSelectEvent {
  text: string;
  viewportRectangle: SelectionRectangle | null;
  hostRectangle: SelectionRectangle | null;
}

export interface SelectionRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

@Directive({
  selector: '[ngTextSelection]'
})
export class TextSelectionDirective implements OnInit {

  @Output('ngTextSelection') textSelectEvent =  new EventEmitter();

  elementRef: ElementRef;
  hasSelection: boolean;
  zone: NgZone;


  constructor(
    elementRef: ElementRef,
    zone: NgZone
  ) {
    this.elementRef = elementRef;
    this.zone = zone;
    this.hasSelection = false;
  }

  ngOnInit() {

    // Since not all interactions will lead to an event that is meaningful to the
    // calling context, we want to setup the DOM bindings outside of the Angular
    // Zone. This way, we don't trigger any change-detection digests until we know
    // that we have a computed event to emit.

    this.zone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('mouseup', () => {
        this.makeSelection();
      });
    });
  }

  makeSelection() {
    const selection = document.getSelection();
    if (this.hasSelection) {
      this.zone.runGuarded(() => { // since emit will reflect changeDetection that's why we run this thing within zone.
        this.hasSelection = false;
        this.textSelectEvent.next({
          text: '',
          viewportRectangle: null,
          hostRectangle: null
        });
      });
    }

    if (!selection.rangeCount) {
      return;
    }

    console.log(selection.getRangeAt(0));
    const range = selection.getRangeAt(0);
    const cord = range.getClientRects();

    this.zone.runGuarded(() => {
      this.hasSelection = true;
      this.textSelectEvent.emit({
        text: selection.toString(),
        viewportRectangle: cord,
        hostRectangle: null
      });
    });
  }

}
