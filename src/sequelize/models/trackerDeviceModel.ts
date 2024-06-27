import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  DataType,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';
import EDGEDevice from './edgeDeviceModel.ts';
import TrackerDeviceData from './trackerDeviceDataModel.ts';

@Table
class TrackerDevice extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id!: number;

  @ForeignKey(() => EDGEDevice)
  @Column({ type: DataType.INTEGER })
  edge_device_id!: number;

  @BelongsTo(() => EDGEDevice)
  edge_device!: EDGEDevice;
  
  @Column({ type: DataType.TEXT })
  name!: string;
  
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

  @HasMany(() => TrackerDeviceData)
  data!: TrackerDeviceData[];
}

export default TrackerDevice;
