/* 
Problema a ser resolvido: gerenciar produtos de uma loja online com am funcionalidades de:

 - Aumentar o preço de todos os produtos em 10%;
 - Filtrar os produtos que custam mais de R$ 50,00 após o aumento de 10%;
 - Somar o preço de de todos os produtos filtrados;

*/

// Implementação Imperativa
const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Calça', preco: 50 },
    { nome: 'Tênis', preco: 80 },
    { nome: 'Boné', preco: 30 }
  ];
  
  // Aumentar os preços em 10%
  for (let i = 0; i < produtos.length; i++) {
    produtos[i].preco *= 1.1;
  }
  
  // Filtrar produtos acima de R$50,00
  const produtosCaros = [];
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco > 50) {
      produtosCaros.push(produtos[i]);
    }
  }
  
  // Somar os preços dos produtos filtrados
  let precoTotal = 0;
  for (let i = 0; i < produtosCaros.length; i++) {
    precoTotal += produtosCaros[i].preco;
  }
  
  console.log('Abordagem Imperativa:', precoTotal);
  
  // Implementação Funcional
  const precoTotalFuncional = produtos
    .map(produto => ({ ...produto, preco: produto.preco * 1.1 }))
    .filter(produto => produto.preco > 50)
    .reduce((total, produto) => total + produto.preco, 0); 
  
  console.log('Abordagem Funcional:', precoTotalFuncional);
  
  /*
  Relatório:

	Problema: Manipular uma lista de produtos para aumentar preços, filtrar itens acima de R$50,00 e calcular o total dos preços filtrados.

Vantagem da implementação funcional: 

 - A abordagem funcional é mais sucinta e expressa mais claramente as operações realizadas em cada etapa;
 - Os métodos funcionais evitam alterações diretas na lista original, criando novas instâncias para cada transformação;
 - O encadeamento dos métodos faz com que o código seja mais fácil de manter;

 
Na implementação imperativa se utiliza mais linhas de código e manipulação manual de estados intermediários, enquanto a funcional é mais declarativa.

  */
  