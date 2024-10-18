import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  //@Input({ required: true }) id!: string;
  @Input() name?: string;

  //This is another way of writing the code.
  //@Input() name: string | undefined;


}
