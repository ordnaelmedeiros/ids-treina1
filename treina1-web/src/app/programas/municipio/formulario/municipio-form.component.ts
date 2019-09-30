import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MunicipioCrudService } from '../services/municipio-crud.service';
import { MunicipioPesquisaService } from '../services/municipio-pesquisa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-municipio-form',
  templateUrl: './municipio-form.component.html',
  styleUrls: ['./municipio-form.component.css'],
  providers: [
    MunicipioCrudService,
    MunicipioPesquisaService
  ]
})
export class MunicipioFormComponent implements OnInit {

  ufs = [];
  formMunicipio: FormGroup;
  editando = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private municipioPesquisaService: MunicipioPesquisaService,
              private municipioCrudService: MunicipioCrudService) {
    this.configurarFormulario();
  }

  ngOnInit() {
    this.carregarUfs();
    this.verificarParametroRota();
  }

  configurarFormulario() {
    this.formMunicipio = this.formBuilder.group({
      id: '',
      nome: ['', Validators.required],
      uf: ['', Validators.required]
    });
    this.formMunicipio.get('id').disable();
  }

  carregarUfs() {
    this.municipioPesquisaService.listarUFs().subscribe(
      ufs => {
        this.ufs = ufs;
      }
    );
  }

  verificarParametroRota(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carregarMunicipio(id);
    } else {
      this.novo();
    }
  }

  carregarMunicipio(id: number) {
    this.municipioCrudService.carregar(id).subscribe(
      municipio => {
        this.formMunicipio.get('id').patchValue(municipio.id);
        this.formMunicipio.get('nome').patchValue(municipio.nome);
        this.formMunicipio.get('uf').patchValue({
          key: municipio.uf
        });
        this.editando = true;
      }
    );
  }

  salvar() {
    if (this.validarFormulario()) {
      const municipio = {
        id: this.formMunicipio.get('id').value,
        nome: this.formMunicipio.get('nome').value,
        uf: this.formMunicipio.get('uf').value.key
      };
      if (municipio.id) {
        this.municipioCrudService.incluir(municipio).subscribe(
          result => {
            console.log(result);
          }
        );
      } else {
        this.municipioCrudService.atualizar(municipio).subscribe(
          result => {
            console.log(result);
          }
        );
      }
    }
  }

  validarFormulario() {
    this.formMunicipio.updateValueAndValidity();
    if (this.formMunicipio.valid) {
      return true;
    } else {
      alert('Não é possível salvar o Município!');
      return false;
    }
  }

  excluir() {
    const id = this.formMunicipio.get('id').value;
    const confirmacao = confirm('Deseja excluir o Município ' + id + '?');
    if (confirmacao) {
      this.municipioCrudService.deletar(id).subscribe(
        result => {
          console.log(result);
        }
      );
    }
  }

  novo() {
    this.editando = false;
    this.formMunicipio.reset({
      uf: {
        key: 'PR'
      }
    });
  }

}
