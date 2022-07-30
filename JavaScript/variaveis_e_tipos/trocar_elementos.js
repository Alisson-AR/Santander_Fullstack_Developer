function substituiPares(substituir) {
    if(!substituir) return -1;
    if(!substituir.length) return -1;

    for (let i = 0; i < substituir.length; i++) {
        if (substituir[i] === 0) {
            console.log("Número já é zero !!");
        } else if (substituir[i] % 2 === 0) {
            console.log(`Substituindo ${substituir[i]} por 0...`);
            substituir[i] = 0;
        }
    }

    return substituir;
}

let substituir = [2, 3, 5, 8, 9, 10, 14, 15, 17, 19];
substituiPares(substituir);

//*Para consultar no terminal depois da substituição:
console.log(substituiPares(substituir));