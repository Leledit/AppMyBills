import dadosDespesas from './dados/despesas';

function organizandoDespesas() {
  let vencimentoDespesa = '';
  let despesasMes = [];
  let despesasFixa = [];
  let despesasParceladas = [];
  const mesAtual = new Date().getMonth();

  dadosDespesas.despesas.forEach(despesa => {
    vencimentoDespesa = new Date(despesa.vencimento);
    switch (despesa.tipo) {
      case 'Despesa do mes':
        if (vencimentoDespesa.getMonth() === mesAtual) {
          despesasMes.push(despesa);
        }
        break;
      case 'Despesa fixa':
        despesasFixa.push(despesa);
        break;
      case 'Despesa parcelada':
        if (vencimentoDespesa.getMonth() === mesAtual) {
          despesasParceladas.push(despesa);
        }
        break;
      default:
        break;
    }
  });

  let totalDespesas = {
    mes: despesasMes,
    fixa: despesasFixa,
    parceladas: despesasParceladas,
  };
  return totalDespesas;
}

export function retornarUltimoIdDespesa() {
  let proximoRegistro = dadosDespesas.despesas.length + 1;
  return proximoRegistro;
}

export function buscarDespesas() {
  const totalDespesas = organizandoDespesas();
  return totalDespesas;
}

export function buscarDespesa(idDespesa) {
  let despesaSelecionada = [];
  dadosDespesas.despesas.forEach(despesa => {
    if (idDespesa === despesa.id) {
      despesaSelecionada.push(despesa);
    }
  });
  return despesaSelecionada;
}

export function cadastrarDespesa(dadosDespesa) {
  if (dadosDespesa.tipo === 'Despesa parcelada') {
    const valorPacela = dadosDespesa.valor / dadosDespesa.numeroParcelas;
    const dataAtual = new Date();
    const mesCorrente = new Date().getMonth();
    let idDespesa = retornarUltimoIdDespesa();
    for (let i = 0; i < dadosDespesa.numeroParcelas; i++) {
      let numeroParcelas = `${i + 1}/${dadosDespesa.numeroParcelas}`;
      let vencimento = '';
      if (i === 0) {
        idDespesa = idDespesa;
        vencimento = dataAtual.setMonth(mesCorrente);
      } else {
        idDespesa = idDespesa + 1;
        vencimento = dataAtual.setMonth(mesCorrente + 1);
      }
      vencimento = new Date(vencimento);
      let despesa = {
        id: idDespesa,
        nome: dadosDespesa.nome,
        valor: valorPacela,
        descricao: dadosDespesa.descricao,
        vencimento: vencimento,
        numeroParcelas: numeroParcelas,
        tipo: dadosDespesa.tipo,
      };
      dadosDespesas.despesas.push(despesa);
    }
  } else {
    dadosDespesas.despesas.push(dadosDespesa);
  }
}

export function excluirDespesa(idDespesa) {
  for (let i = 0; i < dadosDespesas.despesas.length; i++) {
    const despesa = dadosDespesas.despesas[i];
    if (despesa.id === idDespesa) {
      dadosDespesas.despesas.splice(i, 1);
    }
  }
}

export function editarDespesa(dadosDespesa) {
  for (let i = 0; i < dadosDespesas.despesas.length; i++) {
    const despesa = dadosDespesas.despesas[i];
    if (despesa.id === dadosDespesa.id) {
      dadosDespesas.despesas.splice(i, 1, dadosDespesa);
    }
  }
}
