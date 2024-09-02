import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover:string=""
  title:string=""
  description:string=""
  private id: string | null= "0";
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id")
    )    
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string | null){
    const __id:string = id !== null ? id : ''
    const result = dataFake.filter(article => article.id == __id)[0]
    this.description = result.description
    this.title = result.title
    this.photoCover = result.photoCover
  }
}
