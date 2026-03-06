let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
const defaut = "valeur par défaut";
const variables = [
    { nomVar: "nom", valeur: nom },
    { nomVar: "age", valeur: age },
    { nomVar: "ville", valeur: ville },
    { nomVar: "score", valeur: score },
    { nomVar: "actif", valeur: actif }
];
const formatAffichage = (val) => val === "" ? '""' : val;
console.log("Partie A — ?? (Nullish Coalescing)");

for (let i = 0; i < variables.length; i++) {
    let { nomVar, valeur } = variables[i];
    let resultat = valeur ?? defaut;
    console.log(`${nomVar.padEnd(5)} ?? "valeur par défaut"    -> ${formatAffichage(resultat)}`);
}
console.log("\nPartie B — || (Logical OR)");

for (let i = 0; i < variables.length; i++) {
    let { nomVar, valeur } = variables[i];
    let resultat = valeur || defaut;
    console.log(`${nomVar.padEnd(5)} || "valeur par défaut"    -> ${formatAffichage(resultat)}`);
}
console.log("\nPartie C — Comparaison");

for (let i = 0; i < variables.length; i++) {
    let { nomVar, valeur } = variables[i];
    let resNullish = valeur ?? defaut;
    let resOr = valeur || defaut;
    let comparaison = (resNullish === resOr) ? "même résultat" : "résultat différent";
    
    console.log(`${nomVar.padEnd(5)} : ?? et || -> ${comparaison}`);
}