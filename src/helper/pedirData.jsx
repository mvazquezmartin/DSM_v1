import Data from "../data/MOCK_DATA.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Data);
    }, 0);
  });
};

export const pedirItemId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const item = Data.find((el) => el.id === id )
      resolve(item)
    }, 1500)
  })
}