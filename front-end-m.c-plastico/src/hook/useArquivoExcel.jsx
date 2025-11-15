import { create } from 'zustand';

const useArquivoExcel = create((set) => ({
    arquivoExcel: null,
    nomeArquivo: '',
    
    setArquivoExcel: (arquivo) => set({ 
        arquivoExcel: arquivo,
        nomeArquivo: arquivo ? arquivo.name : ''
    }),
    
    limparArquivo: () => set({ 
        arquivoExcel: null, 
        nomeArquivo: '' 
    }),
}));

export default useArquivoExcel;
