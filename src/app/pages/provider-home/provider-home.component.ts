import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PatientsTableComponent } from '../../components/patients-table/patients-table.component';
import { ProviderInfoComponent } from '../../components/provider-info/provider-info.component';
import { ProviderMenuComponent } from '../../components/provider-menu/provider-menu.component';

@Component({
  selector: 'app-provider-home',
  imports: [
    MatSidenavModule,
    PatientsTableComponent,
    ProviderInfoComponent,
    ProviderMenuComponent,
  ],
  templateUrl: './provider-home.component.html',
  styleUrl: './provider-home.component.css',
})
export class ProviderHomeComponent {}
