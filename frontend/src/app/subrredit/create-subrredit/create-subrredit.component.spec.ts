import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubrreditComponent } from './create-subrredit.component';

describe('CreateSubrreditComponent', () => {
  let component: CreateSubrreditComponent;
  let fixture: ComponentFixture<CreateSubrreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubrreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubrreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
