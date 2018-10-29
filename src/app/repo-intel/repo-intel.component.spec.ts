import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoIntelComponent } from './repo-intel.component';

describe('RepoIntelComponent', () => {
  let component: RepoIntelComponent;
  let fixture: ComponentFixture<RepoIntelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoIntelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
