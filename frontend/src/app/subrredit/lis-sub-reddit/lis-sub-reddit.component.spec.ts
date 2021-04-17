import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisSubRedditComponent } from './lis-sub-reddit.component';

describe('LisSubRedditComponent', () => {
  let component: LisSubRedditComponent;
  let fixture: ComponentFixture<LisSubRedditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisSubRedditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisSubRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
