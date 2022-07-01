import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { isTemplateExpression } from 'typescript';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  correntistas:any;
  cpf:any;
  nome:any;
  idConta:any;
  correntista:any;
  
  constructor(
    private correntistaService: CorrentistaService,
    
    
  ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
    .subscribe(
      data => {
        this.correntistas = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
  

  save(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome   
  };
  console.log(correntista);
  this.correntistaService.create(correntista)
    .subscribe(
      response => {
        console.log(response);
        this.exibirCorrentistas();
      },
      error => {
        console.log(error);
      });
}

delete(idConta:any) {
  
  console.log("id", idConta);

  this.correntistaService.delete(idConta)
  .subscribe((data:any)=>{
    console.log(data);
    console.log("correntista deletado");  
  });
  
}

}
