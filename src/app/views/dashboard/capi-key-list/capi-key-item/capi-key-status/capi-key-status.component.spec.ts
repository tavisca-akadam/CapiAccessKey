import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapiKeyStatusComponent } from './capi-key-status.component';

describe('CapiKeyStatusComponent', () => {
  let component: CapiKeyStatusComponent;
  let fixture: ComponentFixture<CapiKeyStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapiKeyStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapiKeyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
