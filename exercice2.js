let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let element = valeurs[i];
    let etat;
    if (element) {
       etat = "truthy";
    } else {
        etat = "falsy";
    }
    let affichage;
    if (element === "") { 
        affichage = "(chaine vide)";
    } else {
        affichage = String(element);
    }
    console.log(`${affichage} -> ${etat}`);
}