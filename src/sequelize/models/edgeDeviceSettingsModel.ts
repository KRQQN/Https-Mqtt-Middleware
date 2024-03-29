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
class EDGEDeviceSettings extends Model {
  
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  id!: number;

  @ForeignKey(() => EDGEDevice)
  @Column({ type: DataType.INTEGER })
  edge_device_id!: number;

  @BelongsTo(() => EDGEDevice)
  edge_device!: EDGEDevice;

  @Column({ type: DataType.STRING })
  key!: string;

  @Column({ type: DataType.STRING })
  value!: string;
}

export default EDGEDeviceSettings;
