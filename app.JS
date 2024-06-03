function modificarHTMLform1() {
    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
    <div id="formulario">
        
        <h3 style="height: 4vh; margin-top: 3vh; margin-left: 7vh;">Estudo da composição da argamassa (traço em massa)</h3>
        <p></p>
    
    <div id="imput">
        <div class="inputForm1">
            <label for="traco1" style="margin-left: 5vh; font-size: medium;">Insira o Traço, em massa,(1:n):</label>
            <input type="number" class="w3-input" id="traco1" style="width: 34vh; height:4vh; margin-left: 22vh; border: 1px solid #9f9e9e;"
            placeholder="Traço 1 em 1:n">
        </div>
        <div class="inputForm1">
            <label for="razaoAC" style="margin-left: 5vh; font-size: medium;">Razão água/ligante,em massa (A/L):</label>
            <input type="number" class="w3-input" id="razaoAC" style="width: 34vh; height:4vh; margin-left: 15.5vh; border: 1px solid #9f9e9e;"
            placeholder=" Água/ligante em massa ">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica do ligante:</label>
            <input type="number" class="w3-input" id="cimento" style="width: 34vh; height:4vh;margin-left: 14.9vh; border: 1px solid #9f9e9e;"
            placeholder="Ligante em kg/m³">
        </div>
        <div class="inputForm1">
            <label for="agregado" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica do agregado:</label>
            <input type="number" class="w3-input" id="agregado" style="width: 34vh; height:4vh;margin-left: 11.9vh; border: 1px solid #9f9e9e;"
            placeholder="Agregado em kg/m³">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica da água:</label>
            <input type="number" class="w3-input" id="agua" style="width: 34vh; height:4vh;margin-left: 17.4vh; border: 1px solid #9f9e9e;"
            placeholder="Água em kg/m³">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Volume de vazios da argamassa:</label>
            <input type="number" class="w3-input" id="vazio" style="width: 34vh; height:4vh;margin-left: 20.6vh; border: 1px solid #9f9e9e;"
            placeholder="Vazios em m³">
        </div>

        <div class="inputForm1">
            <label for="produzir" style="margin-left: 5vh; font-size: medium; font-weight: bold; width:60vh;">Quantidade de argamassa que pretende produzir:</label>
            <input type="number" class="w3-input" id="produzir" style="width: 34vh; height:4vh; margin-left: 2vh; border: 1px solid #9f9e9e;"
            placeholder="Quantidade a produzir em l">
        </div>
        <button id="calcularC" onclick="calculaForm1()">CALCULAR</button>
    </div>
</div>
<script src="calculo.js"></script>
<div id="resolucao">
    <div id="resposta" style="margin-left: 4vh; font-size: 2.5vh; margin-bottom: 2vh;margin-top: 3vh; font-weigth: bold;"></div>
    <div id="resultadoC"></div>
    <div id="resultadoM"></div>
    <div id="resultadoA"></div>
    <div id="base" style="margin-left: 4vh; font-size: 2.5vh; margin-bottom: 2vh;"></div>
    <div id="qntAgregado"></div>
    <div id="qntCimento"></div>
    <div id="qntAgua"></div>
</div>

    `;
}

function modificarHTMLform2() {
    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
    <div id="formulario">

        <h2 style="height: 8vh; margin-top: 5vh; margin-left: 7vh;">Estudo da composição da argamassa (traço em volume)</h2>
        <p></p>
    
    <div id="imput">
        <div class="inputForm1">
            <label for="traco1" style="margin-left: 5vh; font-size: medium;">Insira o Traço, em massa,(1:n):</label>
            <input type="number" class="w3-input" id="traco1" style="width: 34vh; height:4vh; margin-left: 22.5vh; border: 1px solid #9f9e9e;"
            placeholder="Traço 1 em 1:n">
        </div>
        <div class="inputForm1">
            <label for="razaoAC" style="margin-left: 5vh; font-size: medium;">Razão água/ligante,em massa (A/L):</label>
            <input type="number" class="w3-input" id="razaoAC" style="width: 34vh; height:4vh; margin-left: 16.5vh; border: 1px solid #9f9e9e;"
            placeholder="água/ligante em massa">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica do ligante:</label>
            <input type="number" class="w3-input" id="cimento" style="width: 34vh; height:4vh;margin-left: 15.5vh; border: 1px solid #9f9e9e;"
            placeholder="Ligante em kg/m³">
        </div>
        <div class="inputForm1">
            <label for="agregado" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica do agregado:</label>
            <input type="number" class="w3-input" id="agregado" style="width: 34vh; height:4vh;margin-left: 12.4vh; border: 1px solid #9f9e9e;"
            placeholder="Agregado em kg/m³">

        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Massa volúmica específica de água:</label>
            <input type="number" class="w3-input" id="agua" style="width: 34vh; height:4vh;margin-left: 17.5vh; border: 1px solid #9f9e9e;"
            placeholder="Água em kg/m³">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Volume de vazios da argamassa, em m3:</label>
            <input type="number" class="w3-input" id="vazio" style="width: 34vh; height:4vh;margin-left: 11vh; border: 1px solid #9f9e9e;"
            placeholder="Vazios em m³">
        </div>
        <h3 style="margin-left: 6vh; margin-bottom: 3vh ;">Baridades: </h3>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Be:</label>
            <input type="number" class="w3-input" id="be" style="width: 34vh; height:4vh;margin-left: 12vh; border: 1px solid #9f9e9e;"
            placeholder="Be...">
        </div>
        <div class="inputForm1">
            <label for="cimento" style="margin-left: 5vh; font-size: medium;">Bg:</label>
            <input type="number" class="w3-input" id="bg" style="width: 34vh; height:4vh;margin-left: 12vh; border: 1px solid #9f9e9e;"
            placeholder="Bg...">
        </div>
        <div class="inputForm1">
            <label for="produzir" style="width:57vh; margin-left: 5vh; font-size: medium; font-weight: bold;">Quantidade de argamassa que pretende produzir:</label>
            <input type="number" class="w3-input" id="produzir" style="width: 34vh; height:4vh; margin-left: 5vh; border: 1px solid #9f9e9e;"
            placeholder="Quantidade a produzir em l">
        </div>
        <button id="calcularC" onclick="calculaForm2()" style="margin-bottom: 10vh;">CALCULAR</button>
    </div>
</div>
<script src="calculo.js"></script>
<div id="resolucao">
<div id="resposta" style="margin-left: 4vh; font-size: 2.5vh; margin-bottom: 2vh;margin-top: 3vh; font-weigth: bold;"></div>
    <div id="resultadoC"></div>
    <div id="resultadoM"></div>
    <div id="resultadoA"></div>
    <div id="base" style="margin-left: 4vh; font-size: 2.5vh; margin-bottom: 2vh;"></div>
    <div id="qntAgregado"></div>
    <div id="qntCimento"></div>
    <div id="qntAgua"></div>
</div>

    
    `}

function modificarHTMLhome() {
    var element = document.getElementById("home");
    element.style.backgroundColor = "green"; 

    var element = document.getElementById("doc");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("forms");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("norm");
    element.style.backgroundColor = "#4CAF50"; 

    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
    <div id="caixaHome">
    <h2 style="margin-left: 45%; margin-top: 4vh;"> Bem Vindo </h2>
    <p style="margin-left: 8vh; font-size: 2.5vh "> Aconselhamos que antes da utilização seja realizada a leitura da documentação, a mesma pode ser vizualizada na aba 'Documentação'.</p>
    <div id="fotosHome">
        <img src="Imagens/IMG-20240404-WA0000.jpg" style="height: 50vh; width: 50vh; margin-left: 20%; filter: drop-shadow(5px 5px 5px #6e6e6e);">
        <img src="Imagens/VideoCapture_20240404-182842.jpg" style="height: 50vh; width: 50vh; filter: drop-shadow(5px 5px 5px #6e6e6e);">
    </div>
</div>
    `;
}

function modificarHTMLdoc() {
    var element = document.getElementById("home");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("doc");
    element.style.backgroundColor = "green"; 

    var element = document.getElementById("forms");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("norm");
    element.style.backgroundColor = "#4CAF50";

    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
      <h1 style="margin-left: 8vh"> Documentação - Português </h1>
      <iframe  src="documentacao/documentacao.pdf" width="800" height="600" frameborder="0"></iframe>
     
    `;
}

function modificarHTMLform() {
    var element = document.getElementById("home");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("doc");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("forms");
    element.style.backgroundColor = "green"; 

    var element = document.getElementById("norm");
    element.style.backgroundColor = "#4CAF50";

    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
    <div id="quadrados">
    <div id="massa">
        <d class="titulo"> <p style="margin-left: 25%;">ARGAMASSA COM TRAÇO EM MASSA</p></d>
        <p style="margin-left: 2vh; margin-right: 2vh;">A argamassa com traço em massa é uma mistura utilizada na construção civil, composta por cimento, areia e água, em proporções específicas. O termo "traço em massa" refere-se à proporção dos ingredientes da argamassa, que é geralmente expressa em volume ou peso.
            <br><br>
            Por exemplo, uma argamassa com traço em massa de 1:3 significa que para cada parte de cimento, são utilizadas três partes de areia. A quantidade de água adicionada varia de acordo com a consistência desejada da argamassa.
            <br><br>
            Essa mistura é amplamente utilizada para assentar tijolos, blocos de concreto, revestir paredes, fazer contrapisos, entre outras aplicações na construção civil. A escolha do traço adequado depende das características do material a ser assentado ou revestido, das condições do ambiente e dos requisitos de resistência e durabilidade da estrutura.</p>
            <br>
        <button id="formula1" class="formulas" onclick="modificarHTMLform1()">
            <h2 style="margin-left: 20%;">Calcular</h2>
        </button>
    </div>
    <div id="volume"> 
        <d class="titulo" ><p style="margin-left: 25%;">ARGAMASSA COM TRAÇO EM VOLUME</p></d>
        <p style="margin-left: 2vh; margin-right: 2vh;">A argamassa com traço em volume é outra forma de expressar as proporções dos ingredientes da argamassa, mas ao invés de serem especificadas em peso, são especificadas em volume. Isso significa que as proporções são baseadas nas quantidades de volume de cada ingrediente, em vez de peso.
            <br><br>
            Por exemplo, uma argamassa com traço em volume de 1:2:6 significa que para 1 parte de cimento, são utilizadas 2 partes de areia e 6 partes de agregado miúdo (geralmente areia). A água é adicionada de acordo com a consistência desejada da argamassa, assim como na argamassa com traço em massa.
            <br><br>
            A escolha entre traço em massa e traço em volume muitas vezes depende das preferências do construtor ou das práticas regionais. Ambos os métodos são usados para garantir a consistência e a qualidade da argamassa, com as proporções adequadas para as necessidades específicas de cada projeto.</p>
            <br>
        <button id="formula2" class="formulas" onclick="modificarHTMLform2()">
        <h2 style="margin-left: 20%;">Calcular</h2></button>
    </div>
</div>
   `;
}



function modificarHTMLnormas() {
    var element = document.getElementById("home");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("doc");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("forms");
    element.style.backgroundColor = "#4CAF50"; 

    var element = document.getElementById("norm");
    element.style.backgroundColor = "green";

    var AbaCentral = document.getElementById('AbaCentral');
    AbaCentral.innerHTML = `
    <div id="caixaNormas">
    <h2 style="margin-left: 6vh; margin-top: 3vh;">Normas</h2>
    <div class="NormaMaior" style="margin-top: 2vh;">
        <p style="margin-left:8vh; font-size: larger;"> Argamassas reboco </p>
        <div  class="norma">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >998-1_2010_EN - Argamassas reboco </p>
            <a href="Normas/998-1_2010_EN - Argamassas reboco.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Propriedades Geométricas</p>
        <div  class="norma">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma">933-1_2000_NP EN - Propriedades Geo</p>
            <a href="Normas/933-1_2000_NP EN - Propriedades Geométricas Agregados. Análise granulométrica método da peneiração.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Ensaios Cimento</p>
        <div  class="norma">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >196-1_1996 NP EN - Ensaios Cimento</p>
            <a href="Normas/196-1_1996 NP EN - Ensaios Cimento Resistência Mecânica.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Masonry mortar</p>
        <div  class="norma">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >998-2_2010_EN - masonry mortar</p>
            <a href="Normas/998-2_2010_EN - masonry mortar.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Determination of consistance</p>
        <div  class="norma" style="width: 55vh;">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >1015-3_1999_EN -Mortar for Masonry</p>
            <a href="Normas/1015-3_1999_EN -Mortar for Masonry. Determination of consitence of fresh mortar (by flow table).pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Methods of teste 2004</p>
        <div  class="norma" >
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >1015-3_1999-A1_2004_EN - Methods of </p>
            <a href="Normas/1015-3_1999-A1_2004_EN - Methods of teste for mortar for masonry_Determination of consistence.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">Methods of teste 2006</p>
        <div  class="norma" >
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >1015-3_1999-A2_2006_EN - Methods of</p>
            <a href="Normas/1015-3_1999-A2_2006_EN - Methods of teste for mortar for masonry_Determination of consistence.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
    <div class="NormaMaior">
        <p style="margin-left:8vh; font-size: larger;">(2006) EN</p>
        <div  class="norma">
            <img src="Imagens/4373076_adobe_file_logo_logos_pdf_icon.png" class="pdf">
            <p class="textoNorma" >1015-3-1999-A2  (2006) EN.pdf</p>
            <a href="Normas/1015-3-1999-A2  (2006) EN.pdf">
            <img src="Imagens/1904659_arrow_backup_down_download_save_icon.png" class="download">
            </a>
        </div>
    </div>
  
</div>
    `;
}
 
