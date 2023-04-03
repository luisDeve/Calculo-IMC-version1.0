import {DatosPesoSobrePeso,datosPesoNormal} from "./datos/Sobrepeso.js";
let pesoCaputurado= document.querySelector('.peso')
let alturaCapturado = document.querySelector('.altura')
let botonCalcular=document.querySelector('.contenedor__boton')
let imprimirIMC=document.querySelector('.IMC')
let imprimirPeso=document.querySelector('.categoria')
let imprimirRecomendacion=document.querySelector('.contenedor__recomendacion')


botonCalcular.addEventListener("click", CapturarInputs);

/** */
function CapturarInputs(){
let peso=parseFloat(pesoCaputurado.value);
let altura=parseFloat(alturaCapturado.value);
let alturaAlCuadrado=Math.pow(altura,2)
let calculoImc=(peso/(alturaAlCuadrado)).toFixed(2)
CalculoPeso(calculoImc)
}

function CalculoPeso(imc){
  if(datosPesoNormal.includes(parseFloat(imc))){
    setTimeout(() => {
      crearHTMLNormal(imc)
    }, 500);
    borraHTML()
  }
  else if(DatosPesoSobrePeso.includes(parseFloat(imc))){
    setTimeout(() => {
      crearHTMLSobrepeso(imc)
    }, 500);
    borraHTML()
  }else if(pesoCaputurado.value=='' && alturaCapturado.value==''|| pesoCaputurado.value=='' || alturaCapturado.value==''){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No puedes dejar espacios sin llenar',
    })
  }else{
    setTimeout(() => {
      crearHTMLObesidad(imc)
    }, 500);
    borraHTML()
  }
}
function borraHTML(){
  pesoCaputurado.value=''
  alturaCapturado.value=''
}
function crearHTMLNormal(imc){
  let categoriaPeso='Peso Normal';
    let elementoPeso=`<span class="categoria">${categoriaPeso}</span>`
    let elemento = `<span class="IMC">${imc}</span>`
    let elementoRecomendacion=` <p class="recomendacion w-full leading-8 text-white-light">
    <ul>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">Tu sigue así, vas por buen camino</li>
    </ul>
  </p>`
    imprimirPeso.innerHTML=elementoPeso
    imprimirIMC.innerHTML=elemento
    imprimirRecomendacion.innerHTML=elementoRecomendacion
}
function crearHTMLSobrepeso(imc){
  let categoriaPeso='Sobrepeso';
    let elementoPeso=`<span class="categoria">${categoriaPeso}</span>`
    let elemento = `<span class="IMC">${imc}</span>`
    let elementoRecomendacion=` <p class="recomendacion w-full leading-8 text-white-light">
    <ul>
      <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">1. Realiza cambios en tu alimentación: asegúrate de consumir alimentos saludables, bajos en grasas y calorías, y ricos en nutrientes. Esto significa comer una dieta rica en frutas, verduras, proteínas magras y granos enteros, y limitar los alimentos procesados, los azúcares y los alimentos fritos.</li>
      <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">2. Aumenta la actividad física: trata de hacer ejercicio regularmente, ya sea caminando, corriendo, nadando o haciendo cualquier otra actividad que disfrutes. El objetivo es hacer al menos 30 minutos de actividad física moderada la mayoría de los días de la semana.</li>
      <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">3. Bebe suficiente agua: beber suficiente agua puede ayudar a reducir los antojos de alimentos, ayudarte a sentirte más lleno y aumentar la tasa metabólica. Trata de beber al menos 8 vasos de agua al día.</li>
      <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">4. Reduce el estrés: el estrés puede hacer que comas en exceso, por lo que es importante encontrar formas de reducir el estrés en tu vida. Esto puede incluir practicar la meditación, hacer ejercicio regularmente o dedicar tiempo a actividades que disfrutes.</li>
      <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">5. Duerme lo suficiente: la falta de sueño puede aumentar el apetito y disminuir la tasa metabólica, lo que puede dificultar la pérdida de peso. Trata de dormir al menos 7-8 horas cada noche para ayudar a tu cuerpo a recuperarse y funcionar adecuadamente.</li>
    </ul>
  </p>`
    imprimirPeso.innerHTML=elementoPeso
    imprimirIMC.innerHTML=elemento
    imprimirRecomendacion.innerHTML=elementoRecomendacion
}
function crearHTMLObesidad() {
  let categoriaPeso='Obesidad';
  let elementoPeso=`<span class="categoria">${categoriaPeso}</span>`
  let elemento = `
  <span class="IMC">Tienes mas 30</span>
  `
  let elementoRecomendacion=` <p class="recomendacion w-full leading-8 text-white-light">
  <ul>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">1. Realiza cambios en tu alimentación: asegúrate de consumir alimentos saludables, bajos en grasas y calorías, y ricos en nutrientes. Esto significa comer una dieta rica en frutas, verduras, proteínas magras y granos enteros, y limitar los alimentos procesados, los azúcares y los alimentos fritos.</li>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">2. Aumenta la actividad física: trata de hacer ejercicio regularmente, ya sea caminando, corriendo, nadando o haciendo cualquier otra actividad que disfrutes. El objetivo es hacer al menos 30 minutos de actividad física moderada la mayoría de los días de la semana.</li>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">3. Bebe suficiente agua: beber suficiente agua puede ayudar a reducir los antojos de alimentos, ayudarte a sentirte más lleno y aumentar la tasa metabólica. Trata de beber al menos 8 vasos de agua al día.</li>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">4. Reduce el estrés: el estrés puede hacer que comas en exceso, por lo que es importante encontrar formas de reducir el estrés en tu vida. Esto puede incluir practicar la meditación, hacer ejercicio regularmente o dedicar tiempo a actividades que disfrutes.</li>
    <li class="contenedor__lista pb-8 text-white-light text-center text-sm ">5. Duerme lo suficiente: la falta de sueño puede aumentar el apetito y disminuir la tasa metabólica, lo que puede dificultar la pérdida de peso. Trata de dormir al menos 7-8 horas cada noche para ayudar a tu cuerpo a recuperarse y funcionar adecuadamente.</li>
  </ul>
</p>`
  imprimirPeso.innerHTML=elementoPeso
  imprimirIMC.innerHTML=elemento
  imprimirRecomendacion.innerHTML=elementoRecomendacion
}