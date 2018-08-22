import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CungquanghangComponent } from './cungquanghang.component';

describe('CungquanghangComponent', () => {
  let component: CungquanghangComponent;
  let fixture: ComponentFixture<CungquanghangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CungquanghangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CungquanghangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
