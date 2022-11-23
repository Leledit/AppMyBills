import {buscarDespesas} from './useManipulandoDespesas';
import {buscarReceitas} from './useManipularReceitas';

function calcularReceitas(receitas) {
  let totalReceita = 0;
  let qtdReceitas = 0;
  const mesAtual = new Date().getMonth();
  receitas.forEach(receita => {
    let dataReceita = new Date(receita.dataCadastro).getMonth();
    if (mesAtual === dataReceita) {
      totalReceita += parseInt(receita.valor);
      qtdReceitas += 1;
    }
  });
  const dadosReceita = {
    totalReceita,
    qtdReceitas,
  };
  return dadosReceita;
}

function calcularDespesas(despesas) {
  let mesAtual = new Date().getMonth();
  let qtdDespesasFixa = 0;
  let qtdDespesasMes = 0;
  let qtdDespesasParcela = 0;
  let valorDespesasMes = 0;
  let valorDespesasFixas = 0;
  let valorDespesasParcela = 0;
  despesas.fixa.forEach(despesa => {
    qtdDespesasFixa += 1;
    valorDespesasFixas += parseInt(despesa.valor);
  });
  despesas.mes.forEach(despesa => {
    let vencimentoDespesa = new Date(despesa.vencimento).getMonth();
    if (mesAtual === vencimentoDespesa) {
      qtdDespesasMes += 1;
      valorDespesasMes += parseInt(despesa.valor);
    }
  });
  despesas.parceladas.forEach(despesa => {
    let vencimentoDespesa = new Date(despesa.vencimento).getMonth();
    if (mesAtual === vencimentoDespesa) {
      qtdDespesasParcela += 1;
      valorDespesasParcela += parseInt(despesa.valor);
    }
  });
  const dadosDespesas = {
    qtdDespesasFixa,
    qtdDespesasMes,
    qtdDespesasParcela,
    valorDespesasFixas,
    valorDespesasMes,
    valorDespesasParcela,
  };
  return dadosDespesas;
}

export function prepararDadosDashboard() {
  const receitas = buscarReceitas();
  const despesas = buscarDespesas();

  const dadosDashboard = {
    ...calcularReceitas(receitas),
    ...calcularDespesas(despesas),
  };

  return dadosDashboard;
}
