
(() => {
  function get(url){
    return Promise.resolve(
      fetch(url)
      .then((response) => response.json())
    );
  }

  //==============================================================
  let tasasArray = [];
  let fechasArray = [];
  let nombre = '';
  const graph = document.getElementById('utm');
  
  get('https://www.mindicador.cl/api/utm')
  .then((data) => {

    nombre = data.nombre;
    let tasas = data.serie;

    tasasArray = tasas.map((serie) => serie.valor);
    const tasasArrayR = tasasArray.reverse();
    fechasArray = tasas.map((serie) => serie.fecha.split('T')[0]);
    const fechasArrayR = fechasArray.reverse();
 

    const myChart = new Chart(graph, {
      type: 'bar',
        data: {
            labels: fechasArrayR,
            datasets: [{
                label: nombre,
                data: tasasArrayR,
                borderWidth: 1,
                fill: false,
                
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                
                borderColor: 'rgb(208, 134, 54)',
            }],
          }
    });
  });
  //==============================================================
  
  //==============================================================
  const bitcoin = document.getElementById('bitcoin');
  let bitArray = [];
  let bitsFechaArray = [];
  
  get('https://www.mindicador.cl/api/bitcoin')
  .then((data) => {

    nombre = data.nombre;
    let bitcoins = data.serie;

    bitArray = bitcoins.map((serie) => serie.valor);
    const bitArrayR = bitArray.reverse();
    bitsFechaArray = bitcoins.map((serie) => serie.fecha.split('T')[0]);
    const bitsFechaArrayR = bitsFechaArray.reverse();
 
    const myBitcoin = new Chart(bitcoin, {
        type: 'line',
        data: {
            labels: bitsFechaArrayR,
            datasets: [{
                label: nombre,
                data: bitArrayR,
                borderWidth: 1,
                fill: true,
                borderColor: 'rgb(208, 134, 54)',
            }],
          },
        
    });
  });
  //==============================================================

  //==============================================================
  const valoruf = document.getElementById('valoruf');
  let ufArray = [];
  let ufsFechaArray = [];
  
  get('https://www.mindicador.cl/api/uf')
  .then((data) => {

    nombre = data.nombre;
    let valorufs = data.serie;

    ufArray = valorufs.map((serie) => serie.valor);
    const ufArrayR = ufArray.reverse();
    ufsFechaArray = valorufs.map((serie) => serie.fecha.split('T')[0]);
    const ufsFechaArrayR = ufsFechaArray.reverse();
 
    const myValorUF = new Chart(valoruf, {
        type: 'line',
        data: {
            labels: ufsFechaArrayR,
            datasets: [{
                label: nombre,
                data: ufArray,
                borderWidth: 1,
                fill: false,
                borderColor: 'rgb(208, 134, 54)',
                pointBorderColor: 'rgb(0, 0, 0)',
            }],
          },
        
    });
  });
 //==============================================================

 //============= VALOR ALGUNOS INDICADORES AL DIA DE HOY ========
fechahoy0 = new Date();
let fechahoy1 = fechahoy0.getFullYear() + "-" + (fechahoy0.getMonth() +1) + "-" + fechahoy0.getDate()   ;
document.getElementById('fechahoy').value=fechahoy1;
let fechahoy = fechahoy0.getDate() + "-" + (fechahoy0.getMonth() +1) + "-" + fechahoy0.getFullYear();

get('https://www.mindicador.cl/api/uf/'+fechahoy)
 .then((data) => {
  let valorufhoy = data.serie[0].valor;
  document.getElementById('valorufhoy').value="UF($): "+valorufhoy;
   });

get('https://www.mindicador.cl/api/dolar/'+fechahoy)
 .then((data) => {
  let dolarobshoy = data.serie[0].valor;
  document.getElementById('dolarobshoy').value="DOLAR($): "+dolarobshoy;
   });
get('https://www.mindicador.cl/api/euro/'+fechahoy)
.then((data) => {
    let eurohoy = data.serie[0].valor;
    document.getElementById('eurohoy').value="EURO($): "+eurohoy;
     });
get('https://www.mindicador.cl/api/utm/'+fechahoy)
.then((data) => {
  let utmhoy = data.serie[0].valor;
  document.getElementById('utmhoy').value="UTM($): "+utmhoy;
  }); 
//==============================================================

//==============================================================
  const dolarobservado = document.getElementById('dolarobservado');
  let dolarobservadoArray = [];
  let dolarobservadosFechaArray = [];
  
  get('https://www.mindicador.cl/api/dolar')
  .then((data) => {

    nombre = data.nombre;
    let dolarobservados = data.serie;

    dolarobservadoArray = dolarobservados.map((serie) => serie.valor);
    const dolarobservadoArrayR = dolarobservadoArray.reverse();
    dolarobservadosFechaArray = dolarobservados.map((serie) => serie.fecha.split('T')[0]);
    const dolarobservadosFechaArrayR = dolarobservadosFechaArray.reverse();
 
    const myDolarObservado= new Chart(dolarobservado, {
        type: 'line',
        data: {
            labels: dolarobservadosFechaArrayR,
            datasets: [{
                label: nombre,
                data: dolarobservadoArrayR,
                borderWidth: 1,
                fill: true,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: 'rgb(208, 134, 54)',
            }],
          },
        
    });
  });
 //==============================================================

//==============================================================
   const euro = document.getElementById('euro');
   let euroArray = [];
   let euroFechaArray = [];
   
   get('https://www.mindicador.cl/api/euro')
   .then((data) => {
 
     nombre = data.nombre;
     let euros = data.serie;
 
     euroArray = euros.map((serie) => serie.valor);
     const euroArrayR = euroArray.reverse();
     euroFechaArray = euros.map((serie) => serie.fecha.split('T')[0]);
     const euroFechaArrayR = euroFechaArray.reverse();
 
     const myEuro= new Chart(euro, {
         type: 'line',
         data: {
             labels: euroFechaArrayR,
             datasets: [{
                 label: nombre,
                 data: euroArrayR,
                 borderWidth: 1,
                 fill: false,
                 borderColor: 'rgb(208, 134, 54)',
                 pointBorderColor: 'rgb(0, 0, 0)'
             }],
           },
         
     });
   });
//==============================================================

//==============================================================
const ipc = document.getElementById('ipc');
let ipcArray = [];
let ipcFechaArray = [];

get('https://www.mindicador.cl/api/ipc')
.then((data) => {

  nombre = data.nombre;
  let ipcs = data.serie;

  ipcArray = ipcs.map((serie) => serie.valor);
  const ipcArrayR = ipcArray.reverse();
  ipcFechaArray = ipcs.map((serie) => serie.fecha.split('T')[0]);
  const ipcFechaArrayR = ipcFechaArray.reverse();

  const myIPC= new Chart(ipc, {
      type: 'line',
      data: {
          labels: ipcFechaArrayR,
          datasets: [{
              label: nombre,
              data: ipcArrayR,
              borderWidth: 1,
              fill: false,
              borderColor: 'rgb(208, 134, 54)',
              beginAtZero: false,
          }],
        },
      
  });
});
//==============================================================

})();

