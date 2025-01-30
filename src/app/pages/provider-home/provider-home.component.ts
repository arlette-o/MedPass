import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

import { PatientsTableComponent } from '../../components/patients-table/patients-table.component';

@Component({
  selector: 'app-provider-home',
  imports: [MatSidenavModule, MatListModule, MatIcon, PatientsTableComponent],
  templateUrl: './provider-home.component.html',
  styleUrl: './provider-home.component.css',
})
export class ProviderHomeComponent {
  folders: string[] = ['one', 'two', 'three'];

  notes: string[] = ['abc', 'cde', 'efg'];
}
