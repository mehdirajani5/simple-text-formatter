import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExtendedComponent } from './textarea-extended.component';

describe('TextareaExtendedComponent', () => {
  let component: TextareaExtendedComponent;
  let fixture: ComponentFixture<TextareaExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
