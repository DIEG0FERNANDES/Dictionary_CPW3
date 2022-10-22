import axios, {AxiosInstance} from 'axios'


export default class WordService {
    private _http: AxiosInstance

    constructor() {
        const urlApi = import.meta.env.VITE_API_URL
        this._http = axios.create({
         baseURL: urlApi,
    })
    }
}