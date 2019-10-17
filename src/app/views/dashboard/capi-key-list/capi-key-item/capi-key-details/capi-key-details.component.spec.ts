import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapiKeyDetailsComponent } from './capi-key-details.component';

describe('CapiKeyDetailsComponent', () => {
  let component: CapiKeyDetailsComponent;
  let fixture: ComponentFixture<CapiKeyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapiKeyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapiKeyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
