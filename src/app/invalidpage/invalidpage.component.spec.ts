import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidpageComponent } from './invalidpage.component';

describe('InvalidpageComponent', () => {
  let component: InvalidpageComponent;
  let fixture: ComponentFixture<InvalidpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidpageComponent]
    });
    fixture = TestBed.createComponent(InvalidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
