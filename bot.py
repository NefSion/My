from telegram import Update, KeyboardButton, WebAppInfo, ReplyKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, ContextTypes

# Токен бота (замените на ваш!)
TOKEN = "6530703788:AAGu4V5H0fEUk4GSz9zc7YXi_QXsDFisNT0"

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Кнопка, открывающая игру
    web_app_button = KeyboardButton(
        "🎮 Играть в кликер", 
        web_app=WebAppInfo(url="https://ваш-сайт.github.io/")  # Ссылка на ваш фронтенд
    )
    
    reply_markup = ReplyKeyboardMarkup([[web_app_button]], resize_keyboard=True)
    await update.message.reply_text(
        "Привет! Нажми кнопку ниже, чтобы начать игру:",
        reply_markup=reply_markup
    )

# Запуск бота
if __name__ == "__main__":
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("Бот запущен...")
    app.run_polling()
