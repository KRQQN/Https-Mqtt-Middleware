import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import TrackerDevice from './models/trackerDeviceModel.ts';
import EdgeDevice from './models/edgeDeviceModel.ts';

export async function getSequelizeClient () {
  const sequelizeClient = new Sequelize({
    database: process.env.DB_DATABASE,
    dialect : process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port    : process.env.DB_PORT,
    models  : [
      EdgeDevice,
      TrackerDevice
    ],
  } as SequelizeOptions);

  // ! Remove 'force:' for production
  return await sequelizeClient.sync({force: true});
}