import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../Models/Fournisseur";

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  listFournisseur: Fournisseur[];

  constructor() {
    this.listFournisseur =[
      new Fournisseur(1,"1ABC4522","hp"),
      new Fournisseur(2,"2ABC4522","dell"),
      new Fournisseur(3,"3ABC4522","lenovo"),
      new Fournisseur(400,"40ABC452","asus")
    ]



  }

  ngOnInit(): void {
  }

  getColor(code: string) {
    return code.startsWith('2A')?'bold':'';
  }

  deleteFournisseur(idF: number) {
    console.log('deleteFournisseur' + idF);
    this.listFournisseur = this.listFournisseur.filter(fournisseur => fournisseur.idFournisseur !== idF);
  }
}
