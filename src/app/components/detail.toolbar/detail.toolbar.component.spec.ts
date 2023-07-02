import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailToolbarComponent } from './detail.toolbar.component';

describe('DetailToolbarComponent', () => {
  let component: DetailToolbarComponent;
  let fixture: ComponentFixture<DetailToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailToolbarComponent]
    });
    fixture = TestBed.createComponent(DetailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
