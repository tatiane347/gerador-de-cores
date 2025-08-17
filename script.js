// Adicione o link do Font Awesome nas configurações do CSS do CodePen
// Settings -> CSS -> Add External CSS
// URL: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css

const colorBoxes = document.querySelectorAll('.color-box');
const colorCodes = document.querySelectorAll('.color-code');
const generateBtn = document.getElementById('generate-btn');
const copyButtons = document.querySelectorAll('.copy-btn');
const lockButtons = document.querySelectorAll('.lock-btn');

function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function updatePalette() {
  colorBoxes.forEach((box, index) => {
    if (!box.classList.contains('locked')) {
      const newColor = generateRandomColor();
      box.style.backgroundColor = newColor;
      colorCodes[index].textContent = newColor;
    }
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// Adiciona um evento de clique para cada botão de copiar
copyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textToCopy = colorCodes[index].textContent;
    copyToClipboard(textToCopy);

    button.textContent = 'Copiado!';
    setTimeout(() => {
      button.textContent = 'Copiar';
    }, 1500);
  });
});

// Adiciona um evento de clique para cada botão de travar
lockButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    colorBoxes[index].classList.toggle('locked');

    if (colorBoxes[index].classList.contains('locked')) {
      button.innerHTML = '<i class="fas fa-lock"></i>';
    } else {
      button.innerHTML = '<i class="fas fa-lock-open"></i>';
    }
  });
});

generateBtn.addEventListener('click', updatePalette);

// Gerar uma paleta inicial ao carregar a página
updatePalette();
