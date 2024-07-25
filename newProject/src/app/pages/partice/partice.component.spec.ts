import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticeComponent } from './partice.component';

describe('ParticeComponent', () => {
  let component: ParticeComponent;
  let fixture: ComponentFixture<ParticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


