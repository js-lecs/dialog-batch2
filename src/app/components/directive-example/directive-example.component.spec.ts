import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExampleComponent } from './directive-example.component';
import { CricketerService } from '../../services/cricketer.service';
import { HttpModule } from '@angular/http';
import { TaskService } from '../../services/task.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Task } from '../models/Task.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('DirectiveExampleComponent', () => {
  let component: DirectiveExampleComponent;
  let fixture: ComponentFixture<DirectiveExampleComponent>;
  let taskService: TaskService;
  let de: DebugElement;

  beforeAll(() => {
    // const cricketerService: CricketerService = {
    //   cricketers: [],
    //   getCricketers: () => {
    //     return [
    //       { name: 'abc', type: 'abc' }
    //     ];
    //   }
    // };

    // cricketerService = jasmine.createSpyObj('cricketerService', ['getCricketers']);
    // cricketerService.getCricketers.and.returnValue({ name: 'abc', type: 'abc' });
    // component = new DirectiveExampleComponent(cricketerService);

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [DirectiveExampleComponent],
      providers: [TaskService]
    });
    fixture = TestBed.createComponent(DirectiveExampleComponent);
    component = fixture.componentInstance;
    taskService = TestBed.get(TaskService);
    de = fixture.debugElement;

  });

  it('should add 1+1', () => {
    expect(1 + 1).toEqual(3);
  });

  it('should match title to hello world', () => {
    expect(component.title).toEqual('Hello World');
  });

  // it('should have atleast one cricketer in crickerList', () => {
  //   component.ngOnInit();
  //   expect(component.cricketerList.length).toBeGreaterThan(1);
  // });

  it('should have custom string on h6', () => {
    const el = de.query((By.css('h6'))).nativeElement;
    expect(el.textContent).toEqual('CUSTOM DIRECTIVE');
  });

  it('shoould load tasks', () => {
    spyOn(taskService, 'getTasks')
      .and.returnValue(Observable.of([{ name: 'asd' }]));

    fixture.detectChanges();

    const el = de.query((By.css('h1'))).children;
    expect(el.length).toEqual(1);
  });
});
