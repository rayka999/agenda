import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoContatos } from './resumo-contatos';

describe('ResumoContatos', () => {
  let component: ResumoContatos;
  let fixture: ComponentFixture<ResumoContatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoContatos],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumoContatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
