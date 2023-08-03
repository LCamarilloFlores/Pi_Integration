export default function agregarEventos() {
  document.querySelector('body').addEventListener('keyup', (event) => {
    if (event.keyCode === 38) {
      subir();
    } else if (event.keyCode === 40) {
      bajar();
    }
  });

  const cardsContainer = document.querySelector('#cardsContainer');
  // cardsContainer.addEventListener('click', () => {
  //   console.log(cardsContainer.scrollHeight);
  // });

  document.getElementById('upArrow') &&
    document.getElementById('upArrow').addEventListener('click', subir);
  document.getElementById('downArrow') &&
    document.getElementById('downArrow').addEventListener('click', bajar);

  function subir() {
    cardsContainer.scrollTop = cardsContainer.scrollTop - 304;
    console.log(cardsContainer.scrollTop);
  }

  function bajar() {
    cardsContainer.scrollTop = cardsContainer.scrollTop + 304;
    console.log(cardsContainer.scrollTop);
  }
}
