import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IevnComponent } from './ievn.component';

describe('IevnComponent', () => {
  let component: IevnComponent;
  let fixture: ComponentFixture<IevnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IevnComponent]
    });
    fixture = TestBed.createComponent(IevnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
