import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import EDGEDevice from './edgeDeviceModel.ts';

@Table
class TrackerDevice extends Model {
  
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => EDGEDevice)
  @Column({ type: DataType.INTEGER })
  edge_device_id!: number;

  @BelongsTo(() => EDGEDevice)
  edge_device!: EDGEDevice;

  @Column({ type: DataType.TEXT })
  name!: string;

  @Column({ type: DataType.STRING })
  data!: string; // ! implement correct trackerDeviceData

  @Column({ type: DataType.INTEGER })
  rssi!: number;

  @Column({ type: DataType.TEXT })
  type!: string;

  @Column({ type: DataType.TEXT })
  hardware_address!: string;

  @Column({ type: DataType.TEXT })
  ip_adress!: string;

  @Column({ type: DataType.DATE })
  last_seen!: Date;

  @Column({ type: DataType.TEXT })
  customer!: string;
}

export default TrackerDevice;
