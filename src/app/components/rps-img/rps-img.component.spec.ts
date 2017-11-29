import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsImgComponent } from './rps-img.component';

describe('RpsImgComponent', () => {
  let component: RpsImgComponent;
  let fixture: ComponentFixture<RpsImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpsImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
