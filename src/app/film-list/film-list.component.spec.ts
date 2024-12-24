import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';

describe('FilmsListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
