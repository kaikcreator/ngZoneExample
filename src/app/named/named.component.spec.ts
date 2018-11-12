import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedComponent } from './named.component';

describe('NamedComponent', () => {
  let component: NamedComponent;
  let fixture: ComponentFixture<NamedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
