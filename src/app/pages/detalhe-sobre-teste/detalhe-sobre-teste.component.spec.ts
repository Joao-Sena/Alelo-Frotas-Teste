import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheSobreTesteComponent } from './detalhe-sobre-teste.component';

describe('DetalheSobreTesteComponent', () => {
  let component: DetalheSobreTesteComponent;
  let fixture: ComponentFixture<DetalheSobreTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheSobreTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheSobreTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
