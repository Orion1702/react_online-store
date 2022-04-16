const  uuid = require('uuid')
const path = require('path') // модуль node.js что отдает путь
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '../', 'static', fileName)) // перемещаем картинку в папку статик
            //__dirname - путь к текущей папке с контролелром
            const device = await Device.create({name, price, brandId, typeId, img: fileName})
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                        // deviceId: device.isSoftDeleted
                    })
                )
            }
            
            return res.json(device)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query // получаем из строки запроса
        page = page || 1 // если страница не указана - по умолчанию будет первая
        limit = limit || 9 // лимит товаров на странице
        let offset = page * limit - limit // отбираем нужные товары для страницы
        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()