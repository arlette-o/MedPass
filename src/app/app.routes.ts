import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProviderHomeComponent } from './pages/provider-home/provider-home.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'dashboard', component: ProviderHomeComponent },
  {
    path: 'signin',
    component: SigninComponent,
  },
];
