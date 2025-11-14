/*
let numero = Number(prompt("inserire un numero"));
let counter = 0;

while (counter < 10)
{
    if ((numero % 3) == 0)
    {
        alert("il numero " + numero + " è multiplo di 3");
        counter++;
    }
    numero++;
}
*/

/*
let numero = Number(prompt("inserire un numero"));
const n = Number(prompt("inserire quanti numeri vuoi vedere"));
if (!Number.isNaN(numero) && !Number.isNaN(n))
{
    let count = 0;
    let divisibile = 0;
    let divisori = 1;
    numero += 1;
    while (count < n)
    {
        while (divisori <= numero)
        {
            if ((numero % divisori) == 0)
            {
                divisibile++;
            }
            divisori++;
        }

        if (divisibile == 2)
        {
            alert("il " + (count + 1) + "° numero: " + numero + " è primo");
            count++;
        }
        else
        {
            divisori = 1;
            divisibile = 0;
        }
        numero++;
    }
}
else
{
    alert("errore");
}
*/

/*
const primoNumero = Number(prompt("inserire il primo numero"));
const secondoNumero = Number(prompt("inserire il secondo numero"));

let a = primoNumero;
let b = secondoNumero;
let resto = 0;

while (b != 0)
{
    resto = a % b;
    a = b;
    b = resto;
}

const scelta = prompt("calcolare il m.c.m o il m.c.d tra due numeri (scrivere mcd o mcm)");
if (scelta == "mcd")
{
    alert("il m.c.d tra " + primoNumero + " e " + secondoNumero + " è " + a);
}
else if (scelta == "mcm")
{
    const mcd = a;
    const mcm = (primoNumero * secondoNumero) / mcd;

    alert("il m.c.m tra " + primoNumero + " e " + secondoNumero + " è " + mcm);
}
else
{
    alert("scelta non valida");
}
*/

const array = [9, 2, 12, 5, 100];
const numero = Number(prompt("inserire la posizione dove sosotituire il valore (da 0 a " + (array.length - 1) + ")"));
if (!Number.isNaN(numero) && numero >= 0 && numero < array.length)
{
    const nuovoValore = Number(prompt("inserire il nuovo valore"));
    if (!Number.isNaN(nuovoValore))
    {
        array[numero] = nuovoValore;
        alert("il nuovo array è " + array);
    }
    else
    {
        alert("errore");
    }
}
else
{
    alert("errore");
}
