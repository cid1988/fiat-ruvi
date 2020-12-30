import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListaComponent } from './users-lista.component';

describe('UsersListaComponent', () => {
  let component: UsersListaComponent;
  let fixture: ComponentFixture<UsersListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
