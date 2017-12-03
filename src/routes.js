import Registrar from './components/Registrar.vue';
import LibroDiario from './components/LibroDiario.vue';
import LibroMayor from './components/LibroMayor.vue';
import Balanza from './components/Balanza.vue';
import RegistrarAjustes from './components/RegistrarAjustes.vue';
import BalanzaAjustada from './components/BalanzaAjustada.vue';

export const routes = [
    {
        path:'/',
        component:Registrar
    },
    {
        path:'/libro_diario',
        component:LibroDiario
    },
    {
        path:'/libro_mayor',
        component:LibroMayor
    },
    {
        path:'/balanza',
        component:Balanza
    },
    {
        path:'/ajustes',
        component:RegistrarAjustes
    },
    {
        path:'/balanza_ajustada',
        component:BalanzaAjustada
    }
];