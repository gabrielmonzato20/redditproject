import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubrreditSideBarComponent } from './subrredit-side-bar.component';

describe('SubrreditSideBarComponent', () => {
  let component: SubrreditSideBarComponent;
  let fixture: ComponentFixture<SubrreditSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubrreditSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubrreditSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
