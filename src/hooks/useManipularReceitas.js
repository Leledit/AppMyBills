import dadosreceitas from './dados/receitas';
export function buscarReceitas() {
  return dadosreceitas.receitas;
}

export function retornarIdUltimaReceita() {
  let proximoRegistro = dadosreceitas.receitas.length + 1;
  return proximoRegistro;
}

export function adicionarReceita(dadosReceita) {
  console.log(dadosReceita);
  dadosreceitas.receitas.push(dadosReceita);
}

export function excluirRegitroReceita(idReceita) {
  for (let i = 0; i < dadosreceitas.receitas.length; i++) {
    const element = dadosreceitas.receitas[i];
    if (element.id === idReceita) {
      console.log(element.id);
      dadosreceitas.receitas.splice(i, 1);
      return;
    }
  }
}

export function editarRegistroReceita(novasInformacoes) {
  for (let i = 0; i < dadosreceitas.receitas.length; i++) {
    const element = dadosreceitas.receitas[i];
    if (element.id === novasInformacoes.id) {
      console.log(element.id);
      dadosreceitas.receitas.splice(i, 1, novasInformacoes);
      return;
    }
  }
}
