`Extiende el objeto nativo String con una función multiply(times), de tal forma que 
podamos llamarla sobre cualquier string y devuelva esa string repetida tantas veces 
como el parámetro times indique. Pruébala ejecutando en tu navegador “HolaMundo”.multiply(5);`

String.prototype.multiply = function(times) {
  for (let i = 0; i<times; i++) {
    console.log(this);
  }
}

"HolaMundo".multiply(5);