import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from 'sequelize-typescript';
import TrackerDevice from './trackerDeviceModel.ts';

@Table
class EDGEDevice extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id!: number;

  @Column({ type: DataType.TEXT })
  type!: string;

  @Column({ type: DataType.TEXT })
  hardware_address!: string;

  @Column({ type: DataType.TEXT })
  ip_address!: string;

  @Column({ type: DataType.DATE })
  last_seen!: Date;

  @Column({ type: DataType.TEXT })
  customer!: string;

  @Column({ type: DataType.INTEGER })
  longitude!: number;

  @Column({ type: DataType.INTEGER })
  latitude!: number;

  @HasMany(() => TrackerDevice)
  tracker_devices!: TrackerDevice[];
}

export default EDGEDevice;
