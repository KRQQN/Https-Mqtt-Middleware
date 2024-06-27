import { Request, Response } from 'express';
import { scanFilterSchema } from '../types/zod-shemas-and-TS-types.ts';

async function edgeScanHandler(req: Request, res: Response) {
  const scanFilter = scanFilterSchema.safeParse(req.body);
  const { MAC } = req.params;
  
  if(scanFilter.success) {

    // Ask the edge device for the list of BLE devices, with the filter
    req.mqttPublish(`edge/${MAC}/scan`, JSON.stringify(scanFilter));
    return res.status(200).json({ message: 'Scan command sent to edge device', filter: scanFilter });
  }
  return res.status(400).json({ message: 'Invalid scanfilter'});
}
