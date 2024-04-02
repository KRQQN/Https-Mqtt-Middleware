import { Request, Response } from 'express';
import EDGEDevice from '../sequelize/models/edgeDeviceModel.ts';
import { edgeDeviceSettingsSchema } from '../types/zod-shemas-and-TS-types.ts';

async function edgeSettingsHandler(req: Request, res: Response) {
  const settings = edgeDeviceSettingsSchema.safeParse(req.body);
  const { MAC } = req.params;

  try {
    // Find EdgeDevice by MAC address
    const device = await EDGEDevice.findOne({
      where: { hardware_adress: MAC },
    });

    // If device not null and parse is successful proceed
    if (device && settings.success) {
      // Mqtt publish to the edge device to get the list of tracker devices
      req.mqttPublish(`/edge/${MAC}/settings`, JSON.stringify(settings));
      return res.status(200).json({ message: 'Settings updated successfully' });
    }

    return res.status(400).json({ message: 'Device not found or bad input' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error :', error });
  }
}

export default edgeSettingsHandler;
