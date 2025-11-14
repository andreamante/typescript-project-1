/*
const MAGGIORE_ETA = 18;

// Con questa riga, chiedo all'utente il suo nome.
const nome = prompt("Come ti chiami?"); // Qui un altro commento.

// Con questa riga, stampo a video "Hello, world!".
alert("Hello, " + nome + "!");

const eta = Number(prompt("Quanti anni hai?"));

if (eta < MAGGIORE_ETA)
{
    alert("🔞");
}
else if (eta >= MAGGIORE_ETA && eta < 30)
{
    alert("🔝");
}
else
{
    alert("👍");
}
*/

/*
alert("BENVENUTO NELLA CALCOLATRICE PIU' VELOCE AL MONDO");

const operatore = prompt("inserire un operatore (+, -, *, /)");
const primoValore = Number(prompt("inserire il primo numero"));
const secondoValore = Number(prompt("inserire il secondo numero"));

let risultato = 0;

if (operatore == "+")
{
    risultato = primoValore + secondoValore;
}
else if (operatore == "-")
{
    risultato = primoValore - secondoValore;
}
else if (operatore == "*")
{
    risultato = primoValore * secondoValore;
}
else if (operatore == "/")
{
    risultato = primoValore / secondoValore;
}
else
{
    alert("operatore non valido");
}

if (!Number.isNaN(risultato))
{
    alert("il risultato è " + risultato);
}
*/

const numero = Number(prompt("quanti voti vuoi inserire?"));
let voto = 0;
let somma = 0;
let media = 0;

for (let i = 1; i <= numero;)
{
    voto = Number(prompt("inserire il voto " + i));
    if (!Number.isNaN(voto) && voto >= 1 && voto <= 10)
    {
        somma += voto;
        i++;
    }
    else { alert("errore"); }
}
if (!(Number.isNaN(somma)))
{
    media = somma / numero;
    alert("la media è " + media);
}
else { alert("errore"); }

