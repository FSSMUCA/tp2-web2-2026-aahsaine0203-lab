const nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for (let i = 0; i < nombres.length; i++) {
    let valeur = nombres[i];
    let statut;
    if (Number.isNaN(valeur)) {
        statut = "INVALIDE";
    } else if (valeur === Infinity || valeur === -Infinity) {
        statut = "INFINI";
    } else if (valeur === 0 && 1 / valeur === -Infinity) { 
        statut = "ZERO NEGATIF";
    } else if (Number.isSafeInteger(valeur)) {
        statut = "ENTIER SUR";
    } else if (Number.isInteger(valeur)) {
        statut = "ENTIER HORS LIMITES";
    } else {
        statut = "DECIMAL";
    }
   console.log(`${valeur} -> ${statut}`);
}