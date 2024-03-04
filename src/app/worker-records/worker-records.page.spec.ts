import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkerRecordsPage } from './worker-records.page';

describe('WorkerRecordsPage', () => {
  let component: WorkerRecordsPage;
  let fixture: ComponentFixture<WorkerRecordsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkerRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
