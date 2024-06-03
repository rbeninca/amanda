function calculaForm1() {
    console.log("Botão CALCULAR clicado!");
      // Pegando o valor das variáveis
      var valorX = parseFloat(document.getElementById("traco1").value);
      var valorY = parseFloat(document.getElementById("razaoAC").value);
      var valorS = parseFloat(document.getElementById("cimento").value);
      var valorT = parseFloat(document.getElementById("agregado").value);
      var valorR = parseFloat(document.getElementById("agua").value);
      var valorZ = parseFloat(document.getElementById("vazio").value);
  
      document.getElementById("resposta").textContent = "Composição da argamassa, por m3:";

      //cálculos
      //var dividendo = (1000*valorR*valorS*valorT) +(valorR*valorS*valorT*valorZ);
      //var divisor= (1000*valorR*valorT) + (1000*valorR*valorS*valorT) + (1000*valorS*valorY*valorT);

      let resultadoC =  (1 - valorZ * 0.001) / (1 / valorS + valorX / valorT + valorY / valorR);

      var resultadoM = resultadoC*valorX;
      var resultadoA = resultadoC*valorY;
  
      document.getElementById("resultadoC").textContent = "Resultado Ligante = " + resultadoC.toFixed(2) + "kg";
      document.getElementById("resultadoM").textContent = "Resultado Agregado = " + resultadoM.toFixed(2) + "kg";
      document.getElementById("resultadoA").textContent = "Resultado Água = " + resultadoA.toFixed(2) + "kg";
  
      //Pega a quantidade a produzir e coloca na linha 
      var valorP = parseFloat(document.getElementById("produzir").value);
  
      document.getElementById("base").textContent = "Quantidades dos componentes, em massa, para a produção requerida: " + valorP;
  
      //Calcula a quantidade de agregado, água e cimento
      var totalAgregado = valorP*0.001*resultadoM;
      var totalCimento= valorP*0.001*resultadoC;
      var totalAgua = valorP*0.001*resultadoA;
  
      document.getElementById("qntCimento").textContent = "Total Ligante = " + totalCimento.toFixed(2) + "kg";
      document.getElementById("qntAgregado").textContent = "Total Agregado = " + totalAgregado.toFixed(2) + "kg";
      document.getElementById("qntAgua").textContent = "Total Água = " + totalAgua.toFixed(2) + "kg";
  
  
  };

  function calculaForm2() {
    console.log("Botão CALCULAR clicado!");
      // Pegando o valor das variáveis
      var valorX = parseFloat(document.getElementById("traco1").value);
      var valorY = parseFloat(document.getElementById("razaoAC").value);
      var valorS = parseFloat(document.getElementById("cimento").value);
      var valorT = parseFloat(document.getElementById("agregado").value);
      var valorR = parseFloat(document.getElementById("agua").value);
      var valorZ = parseFloat(document.getElementById("vazio").value);
      var valorG = parseFloat(document.getElementById("bg").value);
      var valorE = parseFloat(document.getElementById("be").value);
  
      

      //cálculos
      var dividendo =  39*valorR*valorS*valorT*valorG;
      var divisor= (40*valorR*valorT*valorG) + (40*valorR*valorS*valorE*valorX) + (40*valorS*valorY*valorT*valorG);
  
      var resultadoC2 = dividendo/divisor;
      var resultadoM2 = resultadoC2*valorX*(valorG/valorR);
      var resultadoA2 = resultadoC2*valorY;
  
      document.getElementById("resultadoC").textContent = "Resultado Ligante = " + resultadoC2.toFixed(2) + "kg";
      document.getElementById("resultadoM").textContent = "Resultado Agregado = " + resultadoM2.toFixed(2) + "kg";
      document.getElementById("resultadoA").textContent = "Resultado Água = " + resultadoA2.toFixed(2) + "kg";
  
      //Pega a quantidade a produzir e coloca na linha 
      var valorP = parseFloat(document.getElementById("produzir").value);
  
      document.getElementById("base").textContent = "Quantidades dos componentes, em massa, para a produção requerida:" + valorP;
 
      document.getElementById("resposta").textContent = "Composição da argamassa, por m3:";

      //Calcula a quantidade de agregado, água e cimento
      var totalAgregado2 = valorP*0.001*resultadoM2;
      var totalCimento2= valorP*0.001*resultadoC2;
      var totalAgua2 = valorP*0.001*resultadoA2;
  
      document.getElementById("qntCimento").textContent = "Total Ligante = " + totalCimento2.toFixed(2) + "kg";
      document.getElementById("qntAgregado").textContent = "Total Agregado = " + totalAgregado2.toFixed(2) + "kg";
      document.getElementById("qntAgua").textContent = "Total Água = " + totalAgua2.toFixed(2) + "kg";
  
  
  };