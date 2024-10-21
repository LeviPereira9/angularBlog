import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() id:number = 0;
  @Input() photoCover:string = "";
  @Input() title:string = "";
  @Input() description:string = "";

  constructor(){
    var data = dataFake[0];

    this.id = data.id;
    this.photoCover = data.photoCover + "400x250";
    this.title = data.title;
    this.description = data.description;

  }

}
