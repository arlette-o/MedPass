import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-provider-menu',
  imports: [MatIcon, MatListModule],
  templateUrl: './provider-menu.component.html',
  styleUrl: './provider-menu.component.css',
})
export class ProviderMenuComponent {
  folders: string[] = ['Appointments', 'two', 'three'];

  tasks: menuItems[] = [
    { label: 'Requests', icon: 'feedback' },
    { label: 'Messages', icon: 'sms' },
  ];

  tools: menuItems[] = [
    { label: 'Appointments', icon: 'event' },
    { label: 'Documents', icon: 'description' },
    { label: 'Settings', icon: 'settings' },
  ];

  notes: string[] = ['Mesages', 'Tasks', 'Profile'];
}

interface menuItems {
  label: string;
  icon: string;
}
