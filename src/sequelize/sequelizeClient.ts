import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import TrackerDevice from './models/trackerDeviceModel.ts';
import EDGEDevice from './models/edgeDeviceModel.ts';
import 'dotenv/config';
import TrackerDeviceData from './models/trackerDeviceDataModel.ts';
import EDGEDeviceSettings from './models/edgeDeviceSettingsModel.ts';
import DeviceTrack from './models/deviceTrackModel.ts';


export async function getSequelizeClient() {
  const sequelizeClient = new Sequelize({
    database: process.env.DB_DATABASE,
    dialect : process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port    : process.env.DB_PORT,
    models  : [
      EDGEDevice,
      TrackerDevice,
      TrackerDeviceData,
      EDGEDeviceSettings,
      DeviceTrack,
    ],
  } as SequelizeOptions);

  sequelizeClient.sync({ force: true });
  
  return sequelizeClient;
}
