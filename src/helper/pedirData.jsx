import Data from '../data/MOCK_DATA.json'

export const pedirDatos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(Data)
        }, 1500)
    } )
}