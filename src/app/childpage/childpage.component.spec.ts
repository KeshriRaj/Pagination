import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpageComponent } from './childpage.component';

describe('ChildpageComponent', () => {
  let component: ChildpageComponent;
  let fixture: ComponentFixture<ChildpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
