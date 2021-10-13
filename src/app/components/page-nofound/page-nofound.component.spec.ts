import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNofoundComponent } from './page-nofound.component';

describe('PageNofoundComponent', () => {
  let component: PageNofoundComponent;
  let fixture: ComponentFixture<PageNofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNofoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
