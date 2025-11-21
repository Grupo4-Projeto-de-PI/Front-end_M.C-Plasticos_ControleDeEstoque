import { create } from 'zustand';

const useLoadingState = create((set) => ({
    estado: 'carregando', // 'carregando' | 'sucesso' | 'erro'
    quantidadeDados: null,
    mensagemErro: null,
    
    setCarregando: () => set({ 
        estado: 'carregando', 
        quantidadeDados: null,
        mensagemErro: null 
    }),
    
    setSucesso: (quantidade) => set({ 
        estado: 'sucesso', 
        quantidadeDados: quantidade,
        mensagemErro: null 
    }),
    
    setErro: (mensagem) => set({ 
        estado: 'erro', 
        quantidadeDados: null,
        mensagemErro: mensagem 
    }),
    
    resetar: () => set({ 
        estado: 'carregando', 
        quantidadeDados: null,
        mensagemErro: null 
    }),
}));

export default useLoadingState;
