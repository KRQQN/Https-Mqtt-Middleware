import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import TrackerDevice from './models/trackerDeviceModel.ts';
import EDGEDevice from './models/edgeDeviceModel.ts';
import 'dotenv/config'
import TrackerDeviceData from './models/trackerDeviceDataModel.ts';
import EDGEDeviceSettings from './models/edgeDeviceSettingsModel.ts';
import DeviceTrack from './models/deviceTrackModel.ts';
import { sequelizeConfSchema } from '../types/zod-shemas-and-TS-types.ts';

const { DB_DATABASE, DB_DIALECT, DB_USERNAME, DB_PASSWORD, DB_PORT } =
  sequelizeConfSchema.parse(process.env);

export async function getSequelizeClient() {
  const sequelizeClient = new Sequelize({
    database: DB_DATABASE,
    dialect : DB_DIALECT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    port    : DB_PORT,
    logging : () => null,    //! Implement for production
    models  : [
      EDGEDevice,
      TrackerDevice,
      TrackerDeviceData,
      EDGEDeviceSettings,
      DeviceTrack,
    ],
  } as SequelizeOptions);

  // ! Remove 'force:' for production
  return await sequelizeClient.sync({force: true});
}