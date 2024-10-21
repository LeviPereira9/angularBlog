import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  @Input() photoCover:string = dataFake[0].photoCover + "500x300";
  @Input() title:string = ""
  @Input() description:string = ""

  constructor(private activeRoute: ActivatedRoute){

    this.activeRoute.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!);

      const data = dataFake.find(e=>{
        return e.id === id;
      })

      this.photoCover = data!.photoCover + "500x300";
      this.title = data!.title;
      this.description = data!.description;
    });



  }
}
