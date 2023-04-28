const URL_API = "./data/campers.json";

const btnLoadData = document.querySelector('#cargarData');
//agregar listener
btnLoadData.addEventListener("click",loadData);
//-------------------------------------
function loadData(){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            viewHTML(data);    
        })
}
function viewHTML(myData){
    const divContenedor = document.querySelector('#contenedor');
    const {id,nombre,edad,ingles} = myData;
    //Mostrar los datos en el html
    divContenedor.innerHTML=/*html*/` 
    <div class="card" style="width: 18rem;">
  <img src="./imagenes/campuslands.jpg" class="card-img-top" alt="...">
  <div class="card-body">
  <p>Id: ${id}</p>
  <p>Nombre : ${nombre}</p>
  <p>Edad : ${edad}</p>
  <p>Nivel de ingles : ${ingles}</p>
  </div>
</div>
    `
}

