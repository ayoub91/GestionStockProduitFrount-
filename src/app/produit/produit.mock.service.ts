
import {Produit} from '../shared/produit'

export class ProduitMockService{

private PRODUITS : Produit[] = [];

constructor(){
    let p1 : Produit = new Produit('Livre',50,20);
    let p2 : Produit = new Produit('Livre',30,2.35);
    let p3: Produit = new Produit('Stylo',200,20.24);

    
    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);

}


public getProduits(): Produit[]{
    return this.PRODUITS;
}
}