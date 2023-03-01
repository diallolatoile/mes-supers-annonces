export interface Annonce {
  id: number,

  titre: string,

  description: string,

  imageSrc: string,

  prix: number,

  categorie: string,

  datePublication: Date,
  
  adresse: string,

  auteur: string,

  telephone: string,

  mail: string
}