require('dotenv').config() // модуль для считывания параметров из файла .env
const express = require('express') //подгружаем модуль express
const sequelize = require('./db')
const models = require('./models/models') // модели таблиц баз даных
const cors = require('cors') // для отправления запросов к базе из браузера
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path') // берем путь

const PORT = process.env.PORT || 5000 // Получаем переменную из файла .env

const app = express() // Создаем объект
app.use(cors()) // АПП теперь работает с запросами в браузере
app.use(express.json()) // форматирует в ДЖЕЙСОН
app.use(express.static(path.resolve(__dirname, 'static'))) // показываем что файлы из папки статик нужно отдавать как статику
app.use(fileUpload())
app.use('/api', router)
// Обработка ошибок, последний MiddleWare
app.use(errorHandler)

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'WORKING!!!'}) // Проверяем
// })

const start = async () => {
    try {
        await sequelize.authenticate() // иницилизируем подключение
        await sequelize.sync() // иницилизируем синхронизацию
        app.listen(PORT, () => console.log(`Server start on PORT ${PORT} !!!`)) // Какой порт прослушивает наш сервер
    } catch(e) {
        console.log(e)
    }
}

start()
