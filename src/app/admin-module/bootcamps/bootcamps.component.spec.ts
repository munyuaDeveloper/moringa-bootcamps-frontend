import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampsComponent } from './bootcamps.component';

describe('BootcampsComponent', () => {
  let component: BootcampsComponent;
  let fixture: ComponentFixture<BootcampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
