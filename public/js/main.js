// Lieux
class Lieu {
    constructor(nom, contenu) {
        this.nom = nom;
        this.contenu = contenu;
    }
}

class Epicerie extends Lieu {
    constructor(nom, contenu, ingredients) {
        super(nom, contenu);
        this.ingredients = ingredients;
    }
}

class Cuisine extends Lieu {
    constructor(nom, contenu, ingredients) {
        super(nom, contenu);
        this.ingredients = ingredients;
    }
}

const maison = new Lieu('maison', []);
const epicerie = new Epicerie('epicerie', [], []);
const cuisine = new Cuisine('cuisine', [], []);

// Ingredients
class Ingredient {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

const poivron = new Ingredient('poivron', 'entier', 1);
const oignon = new Ingredient('oignon', 'entier', 2);
const oeuf = new Ingredient('oeuf', 'entier', 4);
const epice = new Ingredient('epice', 'moulu', 3.25);
const paprika = new Ingredient('paprika', 'moulu', 1.5);
const fromage = new Ingredient('fromage', 'coupé', 1.6);

// Personnage
class Personnage {
    constructor(nom, lieu, argent, panier) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }

    seDeplacer(x) {
        this.lieu = x;
    }

    payer(x) {
        this.argent -= x;
    }

    couper(x, y) {
        x.etat = y;
    }
}

const personnage = new Personnage('Maxime', 'néant', 100, []);