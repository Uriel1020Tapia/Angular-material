import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileToBase64Component } from './file-to-base64.component';

describe('FileToBase64Component', () => {
  let component: FileToBase64Component;
  let fixture: ComponentFixture<FileToBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileToBase64Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileToBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
