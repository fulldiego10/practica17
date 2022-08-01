let number;
  let saludo;
  let between;

  function checkNumber() {
    if (number > 1000) {
      alert('El valor ingresado es valido!');
    } else {
      alert('Tu numero es menor a mil :(');
    }
  }

  function checkSaludo() {
    if (saludo === 'hola') {
      alert('Hola!!! Para ti tambien :)');
    } else {
      alert('tu saludo no es muy amistoso :(');
    }
  }

  function checkBetween() {
    if (between > 100 && between < 200) {
      alert('Tu numero ingresado es el: ' + between);
    } else {
      alert('Tu numero no se encuntra dentro del rango solicitado :(');
    }
  }
  function algoritmo() {
    alert('Bienvenido, ingrese los datos solicitados para continuar');

    do {
      number = +prompt('Ingresa un numero mayor a 1000!');
      checkNumber();
    } while (number <= 1000);

    do {
      saludo = prompt('Por favor, saludame diciendo= Hola ').toLowerCase();
      checkSaludo();
    } while (saludo !== 'hola');

    do {
      between = +prompt('Ingresa un numero entre 100 y 200');
      checkBetween();
    } while (between < 100 || between > 200);

    console.log(number);
    console.log(saludo);
    console.log(between);
  }