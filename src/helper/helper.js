export function converterMoeda(moeda) {
  let valor = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(moeda);
  return valor;
}

export function convertendoValorParaCadastrar(valor) {
  let valorFormatado = valor.replace('.', '');
  valorFormatado = valorFormatado.replace(',', '.');
  return valorFormatado;
}
