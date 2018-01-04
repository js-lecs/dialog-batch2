import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCricketerComponent } from './edit-cricketer.component';

describe('EditCricketerComponent', () => {
  let component: EditCricketerComponent;
  let fixture: ComponentFixture<EditCricketerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCricketerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCricketerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
