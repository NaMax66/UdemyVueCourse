import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(res => res.json()) //create an object
    .then(data => {

      if (!data) return;

      const stocks = data.stocks;
      const funds = data.funds;
      const stockPortfolio = data.stockPortfolio ? data.stockPortfolio : [];

      const portfolio = {
        stockPortfolio,
        funds
      };

      commit('INIT_STOCKS', stocks);
      commit('SET_PORTFOLIO', portfolio);

    })
};
