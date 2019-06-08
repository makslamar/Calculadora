var calculadora = {
  inicializar: function(){
     //** declaro variables **//
     var uno = document.getElementById("1");
     var dos = document.getElementById("2");
     var tres = document.getElementById("3");
     var cuatro = document.getElementById("4");
     var cinco = document.getElementById("5");
     var seis = document.getElementById("6");
     var siete = document.getElementById("7");
     var ocho = document.getElementById("8");
     var nueve = document.getElementById("9");
     var cero = document.getElementById("0");
     var mas = document.getElementById("mas");
     var menos = document.getElementById("menos");
     var por = document.getElementById("por");
     var dividido = document.getElementById("dividido");
     var punto = document.getElementById("punto");
     var igual = document.getElementById("igual");
     var on = document.getElementById("on");
     var sign = document.getElementById("sign");
     var raiz = document.getElementById("raiz");
     var pantalla = document.getElementById("display");


    //**Interactividad de los botones - Cambio de tamaño**//
    uno.addEventListener("mousedown",function(){
    uno.setAttribute("style","transform:scale(0.85,0.85)")
    });
    uno.addEventListener("mouseup",function(){
    uno.setAttribute("style","transform:scale(1,1)")
    });

    dos.addEventListener("mousedown",function(){
    dos.setAttribute("style","transform:scale(0.85,0.85)")
    });
    dos.addEventListener("mouseup",function(){
    dos.setAttribute("style","transform:scale(1,1)")
    });

    tres.addEventListener("mousedown",function(){
    tres.setAttribute("style","transform:scale(0.85,0.85)")
    });
    tres.addEventListener("mouseup",function(){
    tres.setAttribute("style","transform:scale(1,1)")
    });

    cuatro.addEventListener("mousedown",function(){
    cuatro.setAttribute("style","transform:scale(0.85,0.85)")
    });
    cuatro.addEventListener("mouseup",function(){
    cuatro.setAttribute("style","transform:scale(1,1)")
    });

    cinco.addEventListener("mousedown",function(){
    cinco.setAttribute("style","transform:scale(0.85,0.85)")
    });
    cinco.addEventListener("mouseup",function(){
    cinco.setAttribute("style","transform:scale(1,1)")
    });

    seis.addEventListener("mousedown",function(){
    seis.setAttribute("style","transform:scale(0.85,0.85)")
    });
    seis.addEventListener("mouseup",function(){
    seis.setAttribute("style","transform:scale(1,1)")
    });

    siete.addEventListener("mousedown",function(){
    siete.setAttribute("style","transform:scale(0.85,0.85)")
    });
    siete.addEventListener("mouseup",function(){
    siete.setAttribute("style","transform:scale(1,1)")
    });

    ocho.addEventListener("mousedown",function(){
    ocho.setAttribute("style","transform:scale(0.85,0.85)")
    });
    ocho.addEventListener("mouseup",function(){
    ocho.setAttribute("style","transform:scale(1,1)")
    });

    nueve.addEventListener("mousedown",function(){
    nueve.setAttribute("style","transform:scale(0.85,0.85)")
    });
    nueve.addEventListener("mouseup",function(){
    nueve.setAttribute("style","transform:scale(1,1)")
    });

    cero.addEventListener("mousedown",function(){
    cero.setAttribute("style","transform:scale(0.85,0.85)")
    });
    cero.addEventListener("mouseup",function(){
    cero.setAttribute("style","transform:scale(1,1)")
    });

    mas.addEventListener("mousedown",function(){
    mas.setAttribute("style","transform:scale(0.85,0.85)")
    });
    mas.addEventListener("mouseup",function(){
    mas.setAttribute("style","transform:scale(1,1)")
    });

    menos.addEventListener("mousedown",function(){
    menos.setAttribute("style","transform:scale(0.85,0.85)")
    });
    menos.addEventListener("mouseup",function(){
    menos.setAttribute("style","transform:scale(1,1)")
    });

    por.addEventListener("mousedown",function(){
    por.setAttribute("style","transform:scale(0.85,0.85)")
    });
    por.addEventListener("mouseup",function(){
    por.setAttribute("style","transform:scale(1,1)")
    });

    dividido.addEventListener("mousedown",function(){
    dividido.setAttribute("style","transform:scale(0.85,0.85)")
    });
    dividido.addEventListener("mouseup",function(){
    dividido.setAttribute("style","transform:scale(1,1)")
    });

    punto.addEventListener("mousedown",function(){
    punto.setAttribute("style","transform:scale(0.85,0.85)")
    });
    punto.addEventListener("mouseup",function(){
    punto.setAttribute("style","transform:scale(1,1)")
    });

    igual.addEventListener("mousedown",function(){
    igual.setAttribute("style","transform:scale(0.85,0.85)")
    });
    igual.addEventListener("mouseup",function(){
    igual.setAttribute("style","transform:scale(1,1)")
    });

    on.addEventListener("mousedown",function(){
    on.setAttribute("style","transform:scale(0.85,0.85)")
    });
    on.addEventListener("mouseup",function(){
    on.setAttribute("style","transform:scale(1,1)")
    });

    sign.addEventListener("mousedown",function(){
    sign.setAttribute("style","transform:scale(0.85,0.85)")
    });
    sign.addEventListener("mouseup",function(){
    sign.setAttribute("style","transform:scale(1,1)")
    });

    raiz.addEventListener("mousedown",function(){
    raiz.setAttribute("style","transform:scale(0.85,0.85)")
    });
    raiz.addEventListener("mouseup",function(){
    raiz.setAttribute("style","transform:scale(1,1)")
    });


    //**Mostrar numero en pantalla**//
    uno.addEventListener("click",function(){
        escribir("1");
    });
    dos.addEventListener("click",function(){
        escribir("2");
    });
    tres.addEventListener("click",function(){
        escribir("3");
    });
    cuatro.addEventListener("click",function(){
        escribir("4");
    });
    cinco.addEventListener("click",function(){
        escribir("5");
    });
    seis.addEventListener("click",function(){
        escribir("6");
    });
    siete.addEventListener("click",function(){
        escribir("7");
    });
    ocho.addEventListener("click",function(){
        escribir("8");
    });
    nueve.addEventListener("click",function(){
        escribir("9");
    });
    cero.addEventListener("click",function(){
        escribir("0");
    });
    punto.addEventListener("click",function(){
        escribirPunto(".");
    });

    sign.addEventListener("click",function(){
        escribirSign();
    });

    mas.addEventListener("click",function(){
        calculo("mas");
    });

    menos.addEventListener("click",function(){
        calculo("menos");
    });

    por.addEventListener("click",function(){
        calculo("por");
    });

    dividido.addEventListener("click",function(){
        calculo("dividido");
    });


    //**Validaciones para escribir en pantalla**//
    function escribir(numero){
       if(display.innerHTML.length<8){
          if (display.innerHTML!="0"){
            display.innerHTML+=numero;
          } else {display.innerHTML=numero}
       };
     };

     function escribirPunto(numeroPunto){
         if(display.innerHTML.indexOf(".")==-1){
                display.innerHTML +=numeroPunto
         };
     };

     function escribirSign(){
       if(display.innerHTML!="0"){
         display.innerHTML=display.innerHTML*-1
       };
     };

      //**Formatear igual.addEventListener clonando el listener, esto permite la concatenacion de operaciones**//
      function formatearIgual(){
            var newigual = igual.cloneNode(true);
            igual.parentNode.replaceChild(newigual, igual);
            igual = newigual;
            igual.addEventListener("mousedown", function () {
            igual.setAttribute("style", "transform:scale(0.85,0.85)")
            });
            igual.addEventListener("mouseup", function () {
            igual.setAttribute("style", "transform:scale(1,1)")
            });
      }


     //**   Operaciones Aritmeticas    **//
     function calculo(operador){

            if (operador == "mas") {
                var sumando1 = display.innerHTML;
                display.innerHTML = " ";
                formatearIgual();
                igual.addEventListener("click", function (ev) {
                    ev.preventDefault();
                    var sumando2 = display.innerHTML;
                    var totalSuma = (parseFloat(sumando1) + parseFloat(sumando2));
                    var totalPantallaSuma=String(totalSuma).slice(0,8);
                    display.innerHTML = parseFloat(totalPantallaSuma);
                    });
                };

            if(operador=="menos"){
               var minuendo=display.innerHTML;
               display.innerHTML=" ";
               formatearIgual();
               igual.addEventListener("click",function(ev){
                    ev.preventDefault();
                    var sustraendo=display.innerHTML;
                    var totalMenos=((parseFloat(minuendo))-(parseFloat(sustraendo)));
                    var totalPantallaMenos=String(totalMenos).slice(0,8);
                    display.innerHTML =parseFloat(totalPantallaMenos);
               });
            };

            if(operador=="por"){
               var factor1=display.innerHTML;
               display.innerHTML=" ";
               formatearIgual();
               igual.addEventListener("click",function(ev){
                    ev.preventDefault();
                    var factor2=display.innerHTML;
                    var totalPor=(parseFloat(factor1)*parseFloat(factor2));
                    var totalPantallaPor=String(totalPor).slice(0,8);
                    display.innerHTML =parseFloat(totalPantallaPor);
               });
            };

            if(operador=="dividido"){
               var factor1=display.innerHTML;
               display.innerHTML=" ";
               formatearIgual();
               igual.addEventListener("click",function(ev){
                    ev.preventDefault();
                    var factor2=display.innerHTML;
                    var totalDividido=(parseFloat(factor1)/parseFloat(factor2));
                    var totalPantallaDividido=String(totalDividido).slice(0,8);
                    display.innerHTML =parseFloat(totalPantallaDividido);
               });
            };

      };

     //**Boton ON/C para borrar display y poner cero**//
     on.addEventListener("click", function () {
        display.innerHTML = "0";
        formatearIgual();
        });
 }
};

//**Inicializa Calculadora**//
calculadora.inicializar();
