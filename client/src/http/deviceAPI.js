import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async (email, password) => {
    const {data} = await $host.get('api/type')
    return data
}