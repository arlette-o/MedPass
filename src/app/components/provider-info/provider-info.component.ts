import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-provider-info',
  imports: [MatCardModule],
  templateUrl: './provider-info.component.html',
  styleUrl: './provider-info.component.css',
})
export class ProviderInfoComponent {
  name = 'Dr.Flores';
  license = 'M.D.';
}
