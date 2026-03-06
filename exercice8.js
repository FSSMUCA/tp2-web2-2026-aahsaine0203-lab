let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomNettoye = nom.trim();
if (nomNettoye === "") {
    nomNettoye = "Inconnu";
}
let msgNom = `"${nomNettoye}" (corrigé : espaces supprimés)`;

let ageNombre = parseInt(age, 10);
let msgAge = (Number.isNaN(ageNombre) || ageNombre <= 0) 
    ? "valeur invalide" 
    : `${ageNombre} (valide)`;

let positionArobase = email.indexOf("@");
let positionPoint = email.indexOf(".", positionArobase);
let emailValide = positionArobase !== -1 && positionPoint > positionArobase;
let msgEmail = `"${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`;

let scoreNettoye = parseInt(scoreJeu, 10);
if (Number.isNaN(scoreNettoye)) {
    scoreNettoye = 0;
}
let msgScore = `${scoreNettoye} (extrait depuis "${scoreJeu}")`;

let estAdminBooleen = (estAdmin === "true");
let msgAdmin = `${estAdminBooleen} (attention : Boolean("false") = true, conversion manuelle requise)`;

let connexionNettoyee = derniereConnexion ?? "Jamais connecté";
let msgConnexion = `"${connexionNettoyee}" (valeur par défaut via ??)`;

let nbConnexionsNombre = Number(nombreConnexions);
let msgNbConnexions = (nbConnexionsNombre === 0) 
    ? `"Aucune connexion" (0 après conversion)` 
    : nbConnexionsNombre;

console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : ${msgNom}`);
console.log(`age              : ${msgAge}`);
console.log(`email            : ${msgEmail}`);
console.log(`scoreJeu         : ${msgScore}`);
console.log(`estAdmin         : ${msgAdmin}`);
console.log(`derniereConnexion: ${msgConnexion}`);
console.log(`nombreConnexions : ${msgNbConnexions}`);
console.log("================================");