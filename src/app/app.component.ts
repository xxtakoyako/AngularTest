import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RistorantiService } from './servizi/ristoranti.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ristorante:any;

  constructor(private service:RistorantiService) {}
  
  ngOnInit() {
      this.service.getRistoranti(0, 10)
        .subscribe(response => {
          this.ristorante = response;
        });
  }

  
	
}