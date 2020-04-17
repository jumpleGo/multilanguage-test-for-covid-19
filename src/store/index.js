import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import { i18n } from "./../main"
Vue.use(VueCookies);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: '',
    country: window.$cookies.get('country'),
    currency : '',
    summ : 0,
    policy : window.$cookies.get('policy') || false
  },
  mutations: {
    SET_TO_COOKIES: (state) => {
      state.policy = true,
      window.$cookies.set('policy', 'true' )
    },
    SET_CITY_TO_STATE: async (state, data) => {
      state.location = data.city;
      if(data){
        switch (data.country) {
        
          case 'RU':
            state.country = data.country;
            i18n.locale = data.country
            window.$cookies.set('country', data.country)
            state.summ = 30
            state.currency = 'RUB'
            break
          case 'IT':
          case 'CN':
          case 'ES':
            state.country = data.country;
            i18n.locale = data.country
            window.$cookies.set('country', data.country)
            state.summ = 1
            state.currency = 'USD'
            break;
          default:
            state.country = 'EN';
            i18n.locale = 'EN'
            window.$cookies.set('country', 'EN')
            state.summ = 1
            state.currency = 'USD'
            break;
  
        }
      }else{
        i18n.locale = 'EN'
        window.$cookies.set('country', 'EN')
        state.country = 'EN';
      }
    }
  },
  actions: {
    TO_COOKIES : ({commit}) => {
      commit('SET_TO_COOKIES')
    },
    SET_CITY: async ({
      commit
    }, city) => {
      commit('SET_CITY_TO_STATE', city);
    }
  },
  getters: {
    location: state => state.location,
    country: state => state.country,
    currency : state => state.currency,
    summ : state => state.summ,
    policy : state => state.policy
  }
})