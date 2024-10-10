import {
  Component,
  computed,
  EventEmitter,
  Input,
  output,
  Output /*input*/,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  //Output decarator
  @Output() select = new EventEmitter<string>();

  @Output() task = new EventEmitter<string>();

  //This is the same has the code above but it is a new way of writing the code
  //Output Function
  //select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
    this.task.emit(this.name);
  }
}

//This is using signal for input
// avatar = input.required<string>();
// name = input.required<string>();
// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// } );
