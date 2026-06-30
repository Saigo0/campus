import api from '../app/utils/api'; 

export const imovelService = {
  listarTodos: async () => {
    const resposta = await api.get('/imoveis');
    return resposta.data;
  },

  buscarPorId: async (id) => {
    const resposta = await api.get(`/imoveis/${id}`);
    return resposta.data;
  },

  criar: async (dadosImovel) => {
    const resposta = await api.post('/imoveis', dadosImovel);
    return resposta.data;
  }
};