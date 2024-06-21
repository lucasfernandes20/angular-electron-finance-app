import { Component } from '@angular/core';
import { MainContentComponent } from '../../components/main-content/main-content.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MainContentComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  title = 'Tasks';
}
