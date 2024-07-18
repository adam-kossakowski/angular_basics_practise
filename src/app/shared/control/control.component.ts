import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  // constructor() {
  //   afterRender(() => {
  //     console.log('afterRender');
  //   });

  //   afterNextRender(() => {
  //     console.log('afterNextRender');
  //   });
  // }

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  label = input.required<string>();

  private el = inject(ElementRef);

  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
