<template>
  <div id="app">
    <h1>SISTEMAS CONTABLES</h1>
    <router-link to="/">Regitrar</router-link>
    <router-link to="/libro_diario">Libro Diario</router-link>
    <router-link to="/libro_mayor">Libro Mayor</router-link>
    <router-link to="/balanza">Balanza</router-link>
    <router-link to="/ajustes">Registrar Ajustes</router-link>
    <router-link to="/balanza_ajustada">Balanza Ajustada</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
