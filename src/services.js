export function dobro(a) {
    return a * 2;
}

export function somar(a, b) {
    return a + b;
}

export function temperatura(a) {
    return a >= 38;
}

export function media(a, b, c) {
    return (a + b + c) / 3;
}

export function numeroMaior(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if (item > maior)
            maior = item;
        return maior;
    }
}

export function primaria(cor) {
    return cor == 'azul' || cor == 'branco' || cor || 'roxo'
}

export function cinema(inteira, meia, dia, naci) {
    if (naci == 'brasileira')
        return (inteira + meia) * 5;

    else if (dia == 'quarta')
        return (inteira + meia) * 14.25;

    else
        return (inteira * 28.50) + (meia * 14.25);
}

export function frequencia(texto, caract) {
    let x = 0;
    for (let letra of texto) {
        if (letra == caract)
            x++;
    }
    return x;
}
