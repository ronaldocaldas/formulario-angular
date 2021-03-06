import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cliente = new Cliente();
  profissoes = ['programador', 'empresario', 'médico', 'dentista'];

  salvar(form: NgForm) {
    this.cliente.nome = form.value.primeiroNome;
    this.cliente.email = form.value.emailAddress;
    this.cliente.profissao = form.value.profissao;
    console.log(form.value);
    console.log(this.cliente);
    form.reset({ profissao: '' });
  }

}
