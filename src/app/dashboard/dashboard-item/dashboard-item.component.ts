import { Component, Input, ViewEncapsulation } from '@angular/core';

interface Image {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) img!: Image;
}
