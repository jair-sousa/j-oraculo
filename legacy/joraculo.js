// Início do código JavaScript para o Oráculo

document.addEventListener('keydown', function(event) {
  // Verifica se a tecla pressionada é Enter
  if (event.key === 'Enter') {
    // Impede o envio padrão do formulário se o foco estiver em um input
    event.preventDefault();
    // Pega o valor do campo de pergunta
    const questionInput = document.getElementById('question');
    if (questionInput && questionInput.value.trim() !== '') {
      consultaOraculo();
    }
  }
});


// barra de progresso 
const consultaOraculo = async () => {
  const question = document.getElementById("question").value;
  document.getElementById("pergunta").innerHTML = question;

  // Exibe a barra de progresso e inicia animação
  const progressBar = document.getElementById("progress-bar");
  const progressInner = document.getElementById("progress-inner");
  progressBar.style.display = "block";
  progressInner.style.width = "0%";

  // Simula progresso enquanto aguarda resposta
  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 90) { // Vai até 90% enquanto espera
      progress += 10;
      progressInner.style.width = progress + "%";
    }
  }, 200);

  try {
    const response = await fetch("https://j-oraculo-backend.onrender.com/perguntar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pergunta: question })
    });

    const data = await response.json();

    // Finaliza a barra de progresso
    clearInterval(interval);
    progressInner.style.width = "100%";
    setTimeout(() => {
      progressBar.style.display = "none";
      progressInner.style.width = "0%";
    }, 400);

    if (data.resposta) {
      document.getElementById("resposta").innerHTML = data.resposta;
    } else if (data.erro) {
      document.getElementById("resposta").innerHTML = data.erro;
    } else {
      document.getElementById("resposta").innerHTML = "Resposta indefinida.";
    }

  } catch (error) {
    clearInterval(interval);
    progressBar.style.display = "none";
    progressInner.style.width = "0%";
    console.error(error);
    document.getElementById("resposta").innerHTML = "Erro ao consultar o oráculo.";
  }
};


// ...código para perguntar em áudio...

// ...existing code...

let recognition;
let isRecording = false;

function setupSpeechRecognition() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Reconhecimento de voz não suportado neste navegador.');
    return null;
  }
  const rec = new webkitSpeechRecognition();
  rec.lang = 'pt-BR';
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  return rec;
}

const btnFalar = document.getElementById('btn-falar');
const questionInput = document.getElementById('question');

if (btnFalar && questionInput) {
  btnFalar.addEventListener('mousedown', () => {
    if (isRecording) return;
    recognition = setupSpeechRecognition();
    if (!recognition) return;
    isRecording = true;
    btnFalar.innerText = "🎤 Gravando...";
    recognition.start();

    recognition.onresult = function(event) {
      const texto = event.results[0][0].transcript;
      questionInput.value = texto;
    };

    recognition.onerror = function(event) {
      btnFalar.innerText = "🎤 Falar";
      isRecording = false;
      alert('Erro ao reconhecer áudio: ' + event.error);
    };

    recognition.onend = function() {
      btnFalar.innerText = "🎤 Falar";
      isRecording = false;
      if (questionInput.value.trim() !== '') {
        consultaOraculo();
      }
    };
  });

  // Para dispositivos móveis, use touchstart/touchend
  btnFalar.addEventListener('touchstart', (e) => {
    e.preventDefault();
    btnFalar.dispatchEvent(new Event('mousedown'));
  });

  btnFalar.addEventListener('mouseup', () => {
    if (recognition && isRecording) {
      recognition.stop();
    }
  });

  btnFalar.addEventListener('mouseleave', () => {
    if (recognition && isRecording) {
      recognition.stop();
    }
  });

  btnFalar.addEventListener('touchend', (e) => {
    e.preventDefault();
    btnFalar.dispatchEvent(new Event('mouseup'));
  });
}

// ...Fim do código...
