import api from '@/api';
import * as mutationTypes from './mutationTypes';

export default {
  async getStarships({ commit }, { url }) {
    commit(mutationTypes.GET_STARSHIPS);

    try {
      const { data } = await api.getStarships({ url });

      commit(mutationTypes.GET_STARSHIPS_SUCCESS, data);
    } catch (err) {
      commit(mutationTypes.GET_STARSHIPS_ERROR, err.message || 'Failed to retrieve list');
    }
  },
};