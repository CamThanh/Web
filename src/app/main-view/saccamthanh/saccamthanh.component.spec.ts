import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaccamthanhComponent } from './saccamthanh.component';

describe('SaccamthanhComponent', () => {
  let component: SaccamthanhComponent;
  let fixture: ComponentFixture<SaccamthanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaccamthanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaccamthanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
