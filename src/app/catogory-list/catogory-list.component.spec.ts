import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoryListComponent } from './catogory-list.component';

describe('CatogoryListComponent', () => {
  let component: CatogoryListComponent;
  let fixture: ComponentFixture<CatogoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatogoryListComponent]
    });
    fixture = TestBed.createComponent(CatogoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
