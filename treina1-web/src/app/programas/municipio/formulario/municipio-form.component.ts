import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { MunicipioCrudService } from '../services/municipio-crud.service';
import { MunicipioPesquisaService } from '../services/municipio-pesquisa.service';

@Component({
  selector: 'app-municipio-form',
  templateUrl: './municipio-form.component.html',
  styleUrls: ['./municipio-form.component.css'],
  providers: [
    MunicipioCrudService,
    MunicipioPesquisaService,
    MessageService
  ]
})
export class MunicipioFormComponent implements OnInit {

  ufs = [];
  formMunicipio: FormGroup;
  editando = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private messageService: MessageService,
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
        this.municipioCrudService.atualizar(municipio).subscribe(
          municipioId => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso!',
              detail: 'Município ' + municipioId + ' alterado com sucesso!'
            });
          }
        );
      } else {
        this.municipioCrudService.incluir(municipio).subscribe(
          municipioId => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso!',
              detail: 'Município ' + municipioId + ' incluído com sucesso!'
            });
          }
        );
      }
    }
  }

  validarFormulario() {
    this.formMunicipio.markAsDirty();
    this.formMunicipio.updateValueAndValidity();
    if (this.formMunicipio.valid) {
      return true;
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Não é possível salvar o Município!',
        detail: 'Verifique o preenchimento dos campos e tente novamente.'
      });
      return false;
    }
  }

  excluir() {
    const id = this.formMunicipio.get('id').value;
    const confirmacao = confirm('Deseja excluir o Município ' + id + '?');
    if (confirmacao) {
      this.municipioCrudService.deletar(id).subscribe(
        result => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Município ' + id + ' excluído com sucesso!'
          });
          this.novo();
        }
      );
    }
  }

  novo() {
    this.router.navigate(['/municipio/novo']);
    this.editando = false;
    this.formMunicipio.reset({
      uf: {
        key: 'PR'
      }
    });
  }

  cancelar() {
    const id = this.formMunicipio.get('id').value;
    if (id) {
      this.carregarMunicipio(id);
    } else {
      this.novo();
    }
  }

}
