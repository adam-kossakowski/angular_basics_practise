import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';

  add = output<{ title: string; text: string }>();

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit(ticketText: string) {
    const titleData = this.enteredTitle;
    const ticketData = ticketText;
    // this.form?.nativeElement.reset();
    this.add.emit({ title: titleData, text: ticketData });
    this.enteredTitle = '';
    this.form().nativeElement.reset();
  }
}
