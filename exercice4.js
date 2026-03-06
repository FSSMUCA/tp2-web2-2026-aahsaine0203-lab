const paires = [
    { v1: 0, v2: "", txt1: '0', txt2: '""' },
    { v1: 0, v2: "0", txt1: '0', txt2: '"0"' },
    { v1: 0, v2: false, txt1: '0', txt2: 'false' },
    { v1: "", v2: false, txt1: '""', txt2: 'false' },
    { v1: null, v2: undefined, txt1: 'null', txt2: 'undefined' },
    { v1: null, v2: false, txt1: 'null', txt2: 'false' },
    { v1: NaN, v2: NaN, txt1: 'NaN', txt2: 'NaN' },
    { v1: 1, v2: "1", txt1: '1', txt2: '"1"' },
    { v1: " \t\n ", v2: 0, txt1: '" \\t\\n "', txt2: '0' }
];
let compteurDifferences = 0;
for (let i = 0; i < paires.length; i++) {
    let p = paires[i];
    let egaleFaible = (p.v1 == p.v2);
    let egaleStricte = (p.v1 === p.v2);
    if (egaleFaible === true && egaleStricte === false) {
        compteurDifferences++;
    }
    let expr1 = `${p.txt1} == ${p.txt2}`.padEnd(16, ' ');
    let expr2 = `${p.txt1} === ${p.txt2}`.padEnd(17, ' ');
    let res1 = String(egaleFaible).padEnd(5, ' ');
    console.log(`${expr1} -> ${res1}  |   ${expr2} -> ${egaleStricte}`);
}
console.log("---");
console.log(`${compteurDifferences} paire(s) où == et === donnent des résultats différents`);