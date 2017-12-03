import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        cuentas:{
            "10":"EFECTIVO Y FLUJO DE EFECTIVO",
            "11":"INVERSIONES FINANCIERAS",
            "20":"MERCADERIAS",
            "30":"INVERSIONES MOBILIARIAS"
        },
        subcuenta:{},
        transacciones:{},
        ajustes:{},
    },
    getters:{

    },
    mutations:{

    },
    actions:{
        
    }
});