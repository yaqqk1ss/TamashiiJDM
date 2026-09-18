const pole = [4, 19, 2, 200, 10, 13];
let ncislo = pole[0];
for(const nclo of pole){
    if(nclo < ncislo){
        ncislo = nclo;
    }
}
console.log("Nejm. cislo pole: " + ncislo)