// const URL_SERVER = process.env.NODE_ENV === 'production' ? 'https://api-cotizacion-moneda.herokuapp.com' : 'http://localhost:8080';
const URL_SERVER = 'https://api-cotizacion-moneda.herokuapp.com';

export const APIs = {
  QUOTATION: `${URL_SERVER}/cotizacion`
}