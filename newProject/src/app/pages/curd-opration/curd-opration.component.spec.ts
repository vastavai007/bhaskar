import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOprationComponent } from './curd-opration.component';

describe('CurdOprationComponent', () => {
  let component: CurdOprationComponent;
  let fixture: ComponentFixture<CurdOprationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdOprationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdOprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
