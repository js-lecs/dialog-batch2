import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCricketerQueryParamComponent } from './edit-cricketer-query-param.component';

describe('EditCricketerQueryParamComponent', () => {
  let component: EditCricketerQueryParamComponent;
  let fixture: ComponentFixture<EditCricketerQueryParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCricketerQueryParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCricketerQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
