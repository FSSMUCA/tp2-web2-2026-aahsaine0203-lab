let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log(`Sous-total calculé : ${sousTotal}`);

let codeActif = codePromo ?? "BIENVENUE10"; 
let reduction = (codeActif !== null && estMembre === true) 
    ? sousTotal * (reductionPourcentage / 100) 
    : 0;
console.log(`Réduction appliquée : ${reduction}`);

let total = sousTotal - reduction;
console.log(`Total final : ${total}`);

let paiementAccepte = soldeCompte >= total;
let statut = paiementAccepte ? "Paiement accepté" : "Solde insuffisant";
console.log(`Vérification du paiement : ${statut}`);

let nouveauSolde = soldeCompte;
if (paiementAccepte) {
    nouveauSolde = soldeCompte - total;
    console.log(`Nouveau solde calculé : ${nouveauSolde}`);
}
console.log("\n===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${total} MAD`);
console.log(`Statut    : ${statut}`);
console.log(`Solde     : ${nouveauSolde} MAD`);
console.log("=========================");