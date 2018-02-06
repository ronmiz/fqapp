import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UqestionListComponent } from './uqestion-list.component';

describe('UqestionListComponent', () => {
  let component: UqestionListComponent;
  let fixture: ComponentFixture<UqestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UqestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UqestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
