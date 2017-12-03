<template>
  <div>
      <h3>Registrar Transacciones contables</h3>
        <div style="margin:1em 0">
            <span>Opciones</span>
            <button @click="agregar">Add</button>
            <button @click="eliminar">Del</button>
        </div>
       <div id="registros">
            <div id="registro_0">
                <select name="" id="">
                    <option v-for="cuenta in cuentas" value="">{{cuenta}}</option>
                </select>
                <select name="" id="">
                    <option value="">Seleccionar Subcuenta</option>
                </select>
                <input type="text" class="debe" value="0">
                <input type="text" class="haber" value="0">
            </div>
       </div>

      <button style="display:block" @click="registrar">REGISTRAR TRANSACCION</button>

   
  </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        data(){
          return{
              totalRegistros:0,
          }  
        },
        computed: mapState(['cuentas']),
        methods:{
            agregar(){
                let html = document.getElementById('registro_'+this.totalRegistros).cloneNode(true);
                this.totalRegistros++;
                html.setAttribute('id','registro_'+this.totalRegistros);
                document.getElementById('registros').appendChild(html);
            },
            eliminar(){
                let element = document.getElementById("registros");    
                if(element.children.length >1){
                    element.removeChild(element.lastChild);
                    this.totalRegistros--;
                }         
            },
            registrar(){
                let totalDebe=0;
                let totalHaber=0;
                let el = document.getElementById("registros").childNodes;
                let element = document.getElementById("registros");
                for(let i =0; i<element.children.length; i++){
                    let montoDebe= el[i].querySelector('.debe').value;
                    totalDebe+=montoDebe>0? parseInt(montoDebe):0;
                    let montoHaber = el[i].querySelector('.haber').value;
                    totalHaber+=montoHaber>0? parseInt(montoHaber):0;                    
                }
                console.log(totalDebe,' ',totalHaber);
                if(totalDebe!=totalHaber || totalDebe==0 || totalHaber==0){
                    alert('Error: Revisa los montos!');
                }else{
                    console.log('Transaccion');
                }
            }
        }
    }
</script>