import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectModuleComponent } from './create-project-module.component';

describe('CreateProjectModuleComponent', () => {
  let component: CreateProjectModuleComponent;
  let fixture: ComponentFixture<CreateProjectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
