import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AnimalRecordsPage } from './animal-records.page';

describe('AnimalRecordsPage', () => {
  let component: AnimalRecordsPage;
  let fixture: ComponentFixture<AnimalRecordsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimalRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
