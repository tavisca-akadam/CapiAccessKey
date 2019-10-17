import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapiKeyItemComponent } from './capi-key-item.component';

describe('CapiKeyItemComponent', () => {
  let component: CapiKeyItemComponent;
  let fixture: ComponentFixture<CapiKeyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapiKeyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapiKeyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
