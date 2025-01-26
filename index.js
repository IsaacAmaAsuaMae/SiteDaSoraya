function mostrar() {
      document.getElementById("texto").style.display = "block";
      document.getElementById("botao").style.display = "none";
      document.getElementById("foto").style.display = "block";
    }

    function lembrete() {
      alert("Lembre-se, eu te amo! E você é a melhor mãe do mundo.");
    }

    setInterval(lembrete, 30000);
