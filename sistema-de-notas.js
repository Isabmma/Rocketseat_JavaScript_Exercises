/*
Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas numéricas em notas de caracteres.

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C:

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

let notaNum = 100
let notaAlf

let notaA = notaNum >= 90
let notaB = notaNum >= 80 && notaNum <= 89
let notaC = notaNum >= 70 && notaNum <= 79
let notaD = notaNum >= 60 && notaNum <= 69   

if ( notaA ) {
  notaAlf = "A"
} else if (notaB) {
  notaAlf = "B"
} else if (notaC) {
  notaAlf = "C"
} else if (notaD) {
  notaAlf = "D"
} else {
  notaAlf = "F"
}
 
console.log(notaAlf) //"A"