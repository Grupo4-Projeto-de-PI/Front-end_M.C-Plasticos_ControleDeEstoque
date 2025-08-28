function buscarMaterial(nome) {
  return materiais.find(m => m.nome.toLowerCase() === nome.toLowerCase());
}

function filtrarPorQuantidade(min) {
  return materiais.filter(m => m.quantidade >= min);
}

function ordenarPorNome() {
  return materiais.toSorted((a, b) => a.nome.localeCompare(b.nome));
}

function quantidadeTotal() {
  return materiais.reduce((soma, m) => soma + m.quantidade, 0);
}

function validarNome(nome) {
  if (!nome) return false;
  return /^[A-ZÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÇ]/.test(nome); 
}

function validarData(data) {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = data.match(regex);

  if (!match) return false;

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10) - 1; 
  const ano = parseInt(match[3], 10);

  const dt = new Date(ano, mes, dia);

  return (
    dt.getFullYear() === ano &&
    dt.getMonth() === mes &&
    dt.getDate() === dia
  );
}
function validarSenha(senha) {
  const regex = /^\d{8}$/; 
  return regex.test(senha);
}

function validarConfirmacaoSenha(senha, confirmacao) {
  if (senha === confirmacao) {
    return true;
  } else {
    alert(" As senhas não coincidem!");
    return false;
  }
}

function validarNome50(nome) {
  const regex = /^[A-Za-zÀ-ÿ\s]{1,50}$/;
  return regex.test(nome);
}

function validarTelefone(telefone) {
  const apenasNumeros = telefone.replace(/\D/g, "");

  if (apenasNumeros.length === 10 || apenasNumeros.length === 11) {
    return { valido: true, mensagem: "Telefone válido!" };
  } else {
    return { valido: false, mensagem: "O telefone deve ter 10 ou 11 dígitos!" };
  }
}

function validarPeso(peso) {
  const regex = /^\d+(\.\d+)?\s?(kg|g|mg|lb)$/i;

  if (regex.test(peso)) {
    return { valido: true, mensagem: "Peso válido!" };
  } else {
    return { valido: false, mensagem: "Peso inválido! Use o formato correto (ex: 70kg, 500 g, 2.5lb)." };
  }
}

function validarPreco(preco) {
  preco = preco.trim();
  const regex = /^(\s*R?\$?\s*)?\d+([.,]\d{1,2})?$/;

  if (regex.test(preco)) {
    return { valido: true, mensagem: "Preço válido!" };
  } else {
    return { valido: false, mensagem: "Preço inválido! Use formato correto, ex: R$ 100, 50.75" };
  }
}