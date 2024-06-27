import {
    Table,
    Column,
    Model,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    DataType,
  } from 'sequelize-typescript';
  import TrackerDevice from './trackerDeviceModel.ts';
  
  @Table
  class DeviceTrack extends Model {
    
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    id!: number;
  
    @ForeignKey(() => TrackerDevice)
    @Column({ type: DataType.INTEGER })
    tracker_device_id!: number;
  
    @BelongsTo(() => TrackerDevice)
    tracker_device!: TrackerDevice;
  
    @Column({ type: DataType.FLOAT })
    longitude!: number;
  
    @Column({ type: DataType.FLOAT })
    latitude!: number;
  
    @Column({ type: DataType.INTEGER })
    precision!: number;
  
    @Column({ type: DataType.DATE })
    probetime!: Date;
  
    @Column({ type: DataType.INTEGER })
    rssi!: number;
  }
  
  export default DeviceTrack;
  