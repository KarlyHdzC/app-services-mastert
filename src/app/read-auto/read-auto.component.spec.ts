import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAutoComponent } from './read-auto.component';

describe('ReadAutoComponent', () => {
  let component: ReadAutoComponent;
  let fixture: ComponentFixture<ReadAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
