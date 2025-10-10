import { useEffect, useState } from "react";

const initialState = {
  fkProduto: null,
  fkCategoria: null,
  fkCliente: null,
  fkFornecedor: null,
  fkTipoParceiroComercial: null,
  fkTipoMaterial: null,
  tipoOperacao: null,
  dataInicio: null,
  dataFim: null,
  pesoMinimo: null,
  pesoMaximo: null,
  tipoProdutoId: null,
};

let state = { ...initialState };
const listeners = new Set();

function notify() {
  listeners.forEach(l => l(state));
}

export function getSelecao() {
  return state;
}

export function setField(field, value) {
  state = { ...state, [field]: value };
  notify();
}

export function setMultiple(payload) {
  state = { ...state, ...payload };
  notify();
}

export function resetSelecao() {
  state = { ...initialState };
  notify();
}

export function subscribeSelecao(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export default function useSelecaoStore() {
  const [local, setLocal] = useState(state);

  useEffect(() => {
    const unsub = subscribeSelecao(setLocal);
    setLocal(state);
    return unsub;
  }, []);

  return [local, { setField, setMultiple, resetSelecao }];
}