import { Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ConfigComponent } from './pages/config/config.component';

export const routes: Routes = [
  {path: '', component: TasksComponent},
  {path: 'config', component: ConfigComponent},
];
