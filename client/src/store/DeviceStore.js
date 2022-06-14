import {makeAutoObservable} from "mobx";

export default class Devicetore {
    constructor() {
        this._type = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brand = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: "Name device 1", price: 2500, rating: 5, img: "https://royal-life.com.ua/files/resized/products/elektra-maxi-2gr.300x150.jpg.webp"},
            {id: 2, name: "Name device 2", price: 2500, rating: 5, img: "https://royal-life.com.ua/files/resized/products/elektra-maxi-2gr.300x150.jpg.webp"},
            {id: 3, name: "Name device 3", price: 2500, rating: 5, img: "https://royal-life.com.ua/files/resized/products/elektra-maxi-2gr.300x150.jpg.webp"},
            {id: 4, name: "Name device 4", price: 2500, rating: 5, img: "https://royal-life.com.ua/files/resized/products/elektra-maxi-2gr.300x150.jpg.webp"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}