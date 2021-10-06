export class Fournisseur{
  private _idFournisseur: number;
  private _code: string;
  private _libelle: string;



  constructor(idFournisseur: number, code: string, libelle: string) {
    this._idFournisseur = idFournisseur;
    this._code = code;
    this._libelle = libelle;
  }

  get idFournisseur(): number {
    return this._idFournisseur;
  }

  set idFournisseur(value: number) {
    this._idFournisseur = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }


}
