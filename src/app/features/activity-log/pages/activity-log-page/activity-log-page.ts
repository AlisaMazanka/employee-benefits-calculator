import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

interface ActivityLogItem {
  action: string;
  status: 'success' | 'error';
  timestamp: string;
}

@Component({
  selector: 'app-activity-log-page',
  imports: [DatePipe],
  templateUrl: './activity-log-page.html',
  styleUrl: './activity-log-page.scss',
})
export class ActivityLogPage {
  protected readonly logs: ActivityLogItem[] = [
    {
      action: 'Benefits calculation completed',
      status: 'success',
      timestamp: '2026-05-04T14:22:00',
    },
    {
      action: 'Employee benefits saved',
      status: 'success',
      timestamp: '2026-05-04T14:10:00',
    },
    {
      action: 'Failed to calculate benefits',
      status: 'error',
      timestamp: '2026-05-04T13:55:00',
    },
    {
      action: 'Service history updated',
      status: 'success',
      timestamp: '2026-05-04T13:20:00',
    },
  ];
}
