import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import TrackerDevice from './trackerDeviceModel.ts';

@Table
class TrackerDeviceData extends Model {
  
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER.UNSIGNED })
  id!: number;

  @ForeignKey(() => TrackerDevice)
  @Column({ type: DataType.INTEGER })
  tracker_device_id!: number;

  @BelongsTo(() => TrackerDevice)
  tracker_device!: TrackerDevice;
  
  @Column({ type: DataType.DATE })
  last_seen!: Date;

  @Column({ type: DataType.STRING })
  unit!: string;

  @Column({ type: DataType.FLOAT })
  value!: number;

  @Column({ type: DataType.FLOAT })
  rssi!: number;
}

export default TrackerDeviceData;
