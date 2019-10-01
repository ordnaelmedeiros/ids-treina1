import { Component, OnInit } from '@angular/core';
import { MunicipioPesquisaService } from '../services/municipio-pesquisa.service';

@Component({
  selector: 'app-municipio-pesquisa',
  templateUrl: './municipio-pesquisa.component.html',
  styleUrls: ['./municipio-pesquisa.component.css'],
  providers: [
    MunicipioPesquisaService
  ]
})
export class MunicipioPesquisaComponent implements OnInit {

  municipios: any;

  constructor(private municipioPesquisaService: MunicipioPesquisaService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.municipioPesquisaService.pesquisar('').subscribe(
      resultado => {
        this.municipios = resultado.data;
      }
    );
  }

}
