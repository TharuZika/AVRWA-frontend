import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvConfigComponent } from './cctv-config.component';

describe('CctvConfigComponent', () => {
  let component: CctvConfigComponent;
  let fixture: ComponentFixture<CctvConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CctvConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CctvConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
