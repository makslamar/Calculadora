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
        escribir(".");
    });

    function escribir(numero){
      if (display.textContent!=0){
        display.textContent+=numero;
      }else{
        display.textContent=numero;
      }

    function comprobacionPunto(){
       var display.textContent=
    }

    };


   //**Boton ON/C para borrar display y poner cero**//
   on.addEventListener("click",function(){
       display.textContent="0";
   });
  }

  //****//
};
calculadora.inicializar();
