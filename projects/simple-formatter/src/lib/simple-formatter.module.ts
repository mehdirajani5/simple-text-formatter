import { NgModule } from '@angular/core';
import { SimpleFormatterComponent } from './simple-formatter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextareaExtendedComponent } from './textarea-extended/textarea-extended.component';
import { TextSelectionDirective } from './directives/text-selection/text-selection.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SimpleFormatterComponent, TextareaExtendedComponent, TextSelectionDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SimpleFormatterComponent, SimpleFormatterComponent, TextSelectionDirective]
})
export class SimpleFormatterModule { }
