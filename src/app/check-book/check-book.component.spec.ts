import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookComponent } from './check-book.component';

describe('CheckBookComponent', () => {
  let component: CheckBookComponent;
  let fixture: ComponentFixture<CheckBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
