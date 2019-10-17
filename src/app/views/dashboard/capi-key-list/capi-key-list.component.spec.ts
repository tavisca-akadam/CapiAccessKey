import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapiKeyListComponent } from './capi-key-list.component';

describe('CapiKeyListComponent', () => {
  let component: CapiKeyListComponent;
  let fixture: ComponentFixture<CapiKeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapiKeyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapiKeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
