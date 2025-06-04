// Состояние игры
let gameState = {
  coins: 0,
  clickPower: 1,
  autoClickers: 0
};

// Элементы DOM
const coinsDisplay = document.getElementById('coins');
const clickBtn = document.getElementById('clickBtn');
const upgradeClickBtn = document.getElementById('upgradeClick');
const buyAutoClickerBtn = document.getElementById('buyAutoClicker');

// Обновляем интерфейс
function updateUI() {
  coinsDisplay.textContent = `${gameState.coins} монет`;
  upgradeClickBtn.textContent = `⚡ Улучшить клик (${5 * gameState.clickPower}💰)`;
  buyAutoClickerBtn.textContent = `🛠 Купить автокликер (10💰) [${gameState.autoClickers}]`;
}

// Клик по кнопке
clickBtn.addEventListener('click', () => {
  gameState.coins += gameState.clickPower;
  updateUI();
});

// Улучшение клика
upgradeClickBtn.addEventListener('click', () => {
  const cost = 5 * gameState.clickPower;
  if (gameState.coins >= cost) {
    gameState.coins -= cost;
    gameState.clickPower += 1;
    updateUI();
  }
});

// Покупка автокликера
buyAutoClickerBtn.addEventListener('click', () => {
  if (gameState.coins >= 10) {
    gameState.coins -= 10;
    gameState.autoClickers += 1;
    updateUI();
  }
});

// Автокликеры (работают каждую секунду)
setInterval(() => {
  if (gameState.autoClickers > 0) {
    gameState.coins += gameState.autoClickers;
    updateUI();
  }
}, 1000);

updateUI();
