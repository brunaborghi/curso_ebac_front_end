"use strict";

var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner', 'Julia', 'Bruna'];
var notas = [8, 5, 9, 4, 8, 10];
var alunosComNotas = alunos.map(function (itemAtual, index) {
  return {
    nome: itemAtual,
    nota: notas[index]
  };
  ;
});
console.log(alunosComNotas);
function filtraNotaAlunos(alunos) {
  return alunos.nota >= 6;
}
var NotaAlunos = alunosComNotas.filter(filtraNotaAlunos);
console.log(NotaAlunos);