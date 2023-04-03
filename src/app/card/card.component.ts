import { Component, OnInit, Input } from '@angular/core';
import { RistorantiService } from '../servizi/ristoranti.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  ristorante: any
  totalPages: number = 143

  constructor(private ristoranti: RistorantiService) {}

  ngOnInit(): void {
    
    this.ristoranti.getRistoranti(0, 10)
    .subscribe(data => {
      console.log(data);
      
    })
  }

}
