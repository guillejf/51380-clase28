import { connect } from 'mongoose';

export async function connectMongo() {
  try {
    //entorno.MONGO_URL
    await connect('mongodb+srv://guillermofergnani:DBeXuiDCQMqLyMTa@51380.yhqtnxt.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectado a la base de datos');
  } catch (e) {
    console.log(e);
    throw 'Falló la conexion';
  }
}
