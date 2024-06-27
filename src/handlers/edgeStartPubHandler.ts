import { Request, Response } from 'express';
import EDGEDevice from '../sequelize/models/edgeDeviceModel.ts';
import TrackerDevice from '../sequelize/models/trackerDeviceModel.ts';

async function edgeStartPubHandler(req: Request, res: Response) {
  const { MAC } = req.params;

  const device = await EDGEDevice.findOne({
    where: { hardware_address: MAC },
  });

  const d = await EDGEDevice.findOne({
    where: { hardware_address: MAC },
    // This option will return plain objects
  });
  console.log('PAST : ',  d?.tracker_devices);

  console.log('CURRENT :',device?.tracker_devices);

  /* EDGEDevice.findOne({ include: [TrackerDevice] }).then((edgeDevice) => {
    edgeDevice?.tracker_devices.forEach((tracker) =>
      console.log(tracker.dataValues)
    );
  }); */

  return res.status(418).json();
}

export default edgeStartPubHandler;
