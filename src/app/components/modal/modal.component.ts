import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovimentacaoNewComponent } from '../movimentacao-new/movimentacao-new.component';

@Component({
selector: 'app-modal',
templateUrl: './modal.component.html',
styleUrls: ['./modal.component.css']
})
export class ModalComponent  {


constructor(public activeModal: NgbActiveModal) { }

}
