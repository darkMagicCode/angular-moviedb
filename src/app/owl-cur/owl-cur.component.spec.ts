import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCurComponent } from './owl-cur.component';

describe('OwlCurComponent', () => {
  let component: OwlCurComponent;
  let fixture: ComponentFixture<OwlCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
