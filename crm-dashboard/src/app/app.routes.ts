import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { PipelineComponent } from './pipeline/pipeline';
import { DealsComponent } from './deals/deals';
import { ContactsComponent } from './contacts/contacts';
import { ReportsComponent } from './reports/reports';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'reports', component: ReportsComponent }
]; 