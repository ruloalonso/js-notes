`Crea una página HTML con 10 botones, con ids “boton1”, “boton2”, “boton3”, etc. 
Con un solo listener, haz que al clickear cualquier botón, se pinte en la consola el 
número que le corresponde.`

window.onload = function() {
  let buttons = document.getElementsByTagName('button');
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => this.console.log(e.target.id));
  }
  let a = this.document.getElementById('10');
  a.addEventListener('click', e => {
    this.console.log(e.target.id);
    e.preventDefault();
  });
}

