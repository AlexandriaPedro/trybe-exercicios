let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função

function adicionaCliente(cliente) {
  if (typeof(cliente) != "string") {
    return "O cliente dado não é do tipo string!"
  } else {
    clientesTrybeBank.push(cliente);
    return "O cliente " + cliente + " foi adicioando com sucesso."
  }
}

function verificaCliente(cliente) {
  if (typeof(cliente) != "string" || clientesTrybeBank.includes(cliente) == false) {
    return "O cliente dado não é do tipo string, ou não faz parte do banco ainda!"
  } else {
    clientesTrybeBank.pop(cliente);
    return "O cliente " + cliente + " foi removido com sucesso."
  }
}

console.log(adicionaCliente("Alexandria"));
console.log(verificaCliente("Ada"));