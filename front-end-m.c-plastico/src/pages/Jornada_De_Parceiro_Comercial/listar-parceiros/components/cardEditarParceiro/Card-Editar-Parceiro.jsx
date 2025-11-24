import React, { useState, useEffect } from "react";
import "./card-editar-parceiro.css";
import iconeX from "../../../../../assets/icons/icon_fechar.svg";
import { api } from "@service/axios-config";
import Swal from "sweetalert2";

export default function CardEditarParceiro({ id, nome, telefone, tipo, papel, handleclick, onEdited }) {
  const mapTipo = (t) => {
    if (!t) return "";
    if (t === 'PF' || t.toUpperCase() === 'PESSOA FÍSICA' || t.toUpperCase() === 'PESSOA FÍSICA') return 'Pessoa Física';
    if (t === 'PJ' || t.toUpperCase() === 'PESSOA JURÍDICA' || t.toUpperCase() === 'PESSOA JURIDICA') return 'Pessoa Jurídica';
    return t;
  };

  const mapPapel = (p) => {
    if (!p) return "";
    if (p === 'FN' || p.toUpperCase() === 'FORNECEDOR') return 'Fornecedor';
    if (p === 'CL' || p.toUpperCase() === 'CLIENTE') return 'Cliente';
    if (p === 'CLFN' || p.toUpperCase() === 'CLIENTE/FORNECEDOR' || p.toUpperCase() === 'CLIENTE/FORNECEDOR') return 'Cliente/Fornecedor';
    return p;
  };

  const [form, setForm] = useState({
    nome: nome || "",
    telefone: telefone || "",
    tipo: mapTipo(tipo),
    papel: mapPapel(papel)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      const numeros = value.replace(/\D/g, '');
      const formatado = formatTelefone(numeros);
      setForm(prev => ({ ...prev, telefone: formatado }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const formatTelefone = (digits) => {
    if (!digits) return '';
    const d = digits.replace(/^0+/, '');
    if (d.length <= 2) return `(${d}`;
    if (d.length <= 6) return `(${d.slice(0,2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}`;
    return `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7,11)}`;
  };

  useEffect(() => {
    try {
      if (telefone) {
        const onlyDigits = String(telefone).replace(/\D/g, '');
        const formatted = formatTelefone(onlyDigits);
        setForm(prev => ({ ...prev, telefone: formatted }));
      } else {
        setForm(prev => ({ ...prev, telefone: '' }));
      }
    } catch (e) {
      console.error('Erro ao formatar telefone inicial:', e);
    }
  }, [telefone]);

  const handleConfirm = async () => {
    try {
      if (!form.nome || form.nome.trim().length < 2) {
        Swal.fire({ icon: 'error', title: 'Nome inválido', text: 'O nome deve ter ao menos 2 caracteres.', confirmButtonText: 'Corrigir', iconColor: '#f44336' });
        return;
      }

      const telefoneNum = form.telefone.replace(/\D/g, '');
      if (!telefoneNum || (telefoneNum.length !== 10 && telefoneNum.length !== 11)) {
        Swal.fire({ icon: 'error', title: 'Telefone inválido', text: 'O telefone deve conter 10 ou 11 dígitos numéricos.', confirmButtonText: 'Corrigir', iconColor: '#f44336' });
        return;
      }

      if (!form.tipo || !["Pessoa Física", "Pessoa Jurídica"].includes(form.tipo)) {
        Swal.fire({ icon: 'error', title: 'Tipo inválido', text: 'Selecione um tipo válido.', confirmButtonText: 'Corrigir', iconColor: '#f44336' });
        return;
      }

      if (!form.papel || !["Fornecedor", "Cliente", "Cliente/Fornecedor"].includes(form.papel)) {
        Swal.fire({ icon: 'error', title: 'Papel inválido', text: 'Selecione um papel válido.', confirmButtonText: 'Corrigir', iconColor: '#f44336' });
        return;
      }

      const payload = {
        nome: form.nome.trim(),
        telefone: telefoneNum,
        tipoComercial: form.tipo === 'Pessoa Física' ? 'PF' : 'PJ',
        papelComercial: form.papel === 'Fornecedor' ? 'FN' : (form.papel === 'Cliente' ? 'CL' : 'CLFN')
      };

      const response = await api.put(`/parceiro-comercial/${id}`, payload);
      Swal.fire({ icon: 'success', title: 'Parceiro atualizado!', showConfirmButton: false, timer: 1400, iconColor: '#4caf50' });
      if (onEdited) onEdited();
      if (handleclick) handleclick();
    } catch (err) {
      console.error('Erro ao editar parceiro:', err);
      let mensagem = 'Erro ao editar parceiro. Tente novamente.';
      let detalhe = '';
      if (err?.response?.status === 400) {
        mensagem = 'Dados inválidos';
        detalhe = err.response.data?.message || '';
      } else if (err?.response?.status === 404) {
        mensagem = 'Parceiro não encontrado';
      } else if (!err?.response) {
        mensagem = 'Erro de conexão';
        detalhe = 'Verifique sua conexão com a internet.';
      }

      Swal.fire({ icon: 'error', title: mensagem, text: detalhe, confirmButtonText: 'Entendi', iconColor: '#f44336' });
    }
  };

  return (
    <div className="filtro-preto">
      <div className="card-editar-informacoes" role="dialog" aria-modal="true" aria-labelledby="tituloEditarParceiro">
        <div className="titulo-card">
          <h2 id="tituloEditarParceiro">Informações do Parceiro</h2>
          <img src={iconeX} alt="Fechar" role="button" aria-label="Fechar" tabIndex={0} onClick={handleclick} />
        </div>
        <div className="card-input">
          <p>Nome do Parceiro</p>
          <input name="nome" value={form.nome} onChange={handleChange} />
        </div>
        <div className="card-input">
          <p>Telefone do Parceiro</p>
          <input name="telefone" value={form.telefone} onChange={handleChange} />
        </div>
        <div className="card-input">
          <p>Tipo do Parceiro</p>
          <select name="tipo" className="selectModal" value={form.tipo} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Pessoa Jurídica">Pessoa Jurídica</option>
            <option value="Pessoa Física">Pessoa Física</option>
          </select>
        </div>
        <div className="card-input">
          <p>Papel Comercial do Parceiro</p>
          <select name="papel" className="selectModal" value={form.papel} onChange={handleChange}>
            <option value="">Selecione</option>
            <option value="Cliente">Cliente</option>
            <option value="Fornecedor">Fornecedor</option>
            <option value="Cliente/Fornecedor">Cliente/Fornecedor</option>
          </select>
        </div>
        <button type="button" className="botaoMargem" onClick={handleConfirm}>Confirmar Edição</button>
      </div>
    </div>
  );
}
