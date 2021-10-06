import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/Models/Fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

   fournisseur:  Fournisseur;
   hide: boolean ;
   word: string;

  constructor(){
    this.hide = false;
    this.word = 'hide';

    this.fournisseur = new Fournisseur(105, 'A104b89', 'MyTek');
  }

  ngOnInit(): void {

  }

  textShowHide(){
    this.word = this.hide?'show':'hide';
  }

  showHide() {
    this.hide = !this.hide;
    this.textShowHide();
  }


}
