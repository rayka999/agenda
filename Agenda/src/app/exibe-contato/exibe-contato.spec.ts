import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContato } from './exibe-contato';

describe('ExibeContato', () => {
  let component: ExibeContato;
  let fixture: ComponentFixture<ExibeContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibeContato],
    }).compileComponents();

    fixture = TestBed.createComponent(ExibeContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
