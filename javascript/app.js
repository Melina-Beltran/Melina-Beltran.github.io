//buscador de personajes de la api en tiempo real
document.addEventListener('keyup', e => {
  document.querySelectorAll('.tarjeta').forEach(personajes => {
    personajes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ?personajes.classList.remove('filtro')
    :personajes.classList.add('filtro');
  })
})

//recorre la api
const init = () => {
  fetch('https://rickandmortyapi.com/api/character?page=2')
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      const personajes = datos.results;
      const urlNext = datos.info;
      console.log(urlNext);
      const section = document.querySelector('section');
      let info = '';
      let contadorParaImagen = 0;

      for (let i = 0; i < personajes.length; i++) {
        contadorParaImagen + i;
        info += `
            <div class="tarjeta">
              <img src="https://rickandmortyapi.com/api/character/avatar/${i + 1}.jpeg">
              <p class='name'>${personajes[i].name}</p>
            </div>
          `
      }
      return section.innerHTML = info;
    })
}
document.onload = init();