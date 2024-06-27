-- Insert data into "EDGEDevices" table
INSERT INTO "EDGEDevices" (type, hardware_address, ip_address, last_seen, customer, longitude, latitude, "createdAt", "updatedAt")
VALUES
  ('Type1', 'AA:BB:CC:DD:EE:01', '192.168.1.101', '2024-04-01 10:00:00', 'Customer1', 123.456, 78.910, NOW(), NOW()),
  ('Type2', 'AA:BB:CC:DD:EE:02', '192.168.1.102', '2024-04-01 11:00:00', 'Customer2', 135.792, 68.943, NOW(), NOW()),
  ('Type3', 'AA:BB:CC:DD:EE:03', '192.168.1.103', '2024-04-01 12:00:00', 'Customer3', 147.258, 58.967, NOW(), NOW()),
  ('Type4', 'AA:BB:CC:DD:EE:04', '192.168.1.104', '2024-04-01 13:00:00', 'Customer4', 159.753, 48.926, NOW(), NOW()),
  ('Type5', 'AA:BB:CC:DD:EE:05', '192.168.1.105', '2024-04-01 14:00:00', 'Customer5', 171.429, 38.883, NOW(), NOW()),
  ('Type6', 'AA:BB:CC:DD:EE:06', '192.168.1.106', '2024-04-01 15:00:00', 'Customer6', 183.278, 28.840, NOW(), NOW()),
  ('Type7', 'AA:BB:CC:DD:EE:07', '192.168.1.107', '2024-04-01 16:00:00', 'Customer7', 195.312, 18.797, NOW(), NOW()),
  ('Type8', 'AA:BB:CC:DD:EE:08', '192.168.1.108', '2024-04-01 17:00:00', 'Customer8', 207.535, 8.754, NOW(), NOW()),
  ('Type9', 'AA:BB:CC:DD:EE:09', '192.168.1.109', '2024-04-01 18:00:00', 'Customer9', 219.949, -1.289, NOW(), NOW()),
  ('Type10', 'AA:BB:CC:DD:EE:10', '192.168.1.110', '2024-04-01 19:00:00', 'Customer10', 232.556, -11.332, NOW(), NOW());

-- Insert data into "TrackerDevices" table
INSERT INTO "TrackerDevices" (type, hardware_address, name, last_seen, edge_device_id, rssi, customer, "createdAt", "updatedAt")
VALUES
  ('Type1', 'FF:GG:HH:II:JJ:01', 'Tracker1', '2024-04-01 10:30:00', 1, -80.5, 'Customer1', NOW(), NOW()),
  ('Type2', 'FF:GG:HH:II:JJ:02', 'Tracker2', '2024-04-01 11:30:00', 1, -85.3, 'Customer2', NOW(), NOW()),
  ('Type3', 'FF:GG:HH:II:JJ:03', 'Tracker3', '2024-04-01 12:30:00', 1, -90.2, 'Customer3', NOW(), NOW()),
  ('Type4', 'FF:GG:HH:II:JJ:04', 'Tracker4', '2024-04-01 13:30:00', 4, -95.4, 'Customer4', NOW(), NOW()),
  ('Type5', 'FF:GG:HH:II:JJ:05', 'Tracker5', '2024-04-01 14:30:00', 5, -100.6, 'Customer5', NOW(), NOW()),
  ('Type6', 'FF:GG:HH:II:JJ:06', 'Tracker6', '2024-04-01 15:30:00', 6, -105.8, 'Customer6', NOW(), NOW()),
  ('Type7', 'FF:GG:HH:II:JJ:07', 'Tracker7', '2024-04-01 16:30:00', 7, -111.0, 'Customer7', NOW(), NOW()),
  ('Type8', 'FF:GG:HH:II:JJ:08', 'Tracker8', '2024-04-01 17:30:00', 8, -116.2, 'Customer8', NOW(), NOW()),
  ('Type9', 'FF:GG:HH:II:JJ:09', 'Tracker9', '2024-04-01 18:30:00', 9, -121.4, 'Customer9', NOW(), NOW()),
  ('Type10', 'FF:GG:HH:II:JJ:10', 'Tracker10', '2024-04-01 19:30:00', 10, -126.6, 'Customer10', NOW(), NOW());

-- Insert data into "TrackerDeviceData" table
INSERT INTO "TrackerDeviceData" (last_seen, unit, value, rssi, tracker_device_id, "createdAt", "updatedAt")
VALUES
  ('2024-04-01 12:45:00', 'unit1', 10.5, -90.2, 1, NOW(), NOW()),
  ('2024-04-01 13:45:00', 'unit2', 20.3, -95.4, 1, NOW(), NOW()),
  ('2024-04-01 14:45:00', 'unit3', 30.1, -100.6, 3, NOW(), NOW()),
  ('2024-04-01 15:45:00', 'unit4', 40.9, -105.8, 4, NOW(), NOW()),
  ('2024-04-01 16:45:00', 'unit5', 50.7, -111.0, 5, NOW(), NOW()),
  ('2024-04-01 17:45:00', 'unit6', 60.5, -116.2, 6, NOW(), NOW()),
  ('2024-04-01 18:45:00', 'unit7', 70.3, -121.4, 7, NOW(), NOW()),
  ('2024-04-01 19:45:00', 'unit8', 80.1, -126.6, 8, NOW(), NOW()),
  ('2024-04-01 20:45:00', 'unit9', 90.9, -131.8, 9, NOW(), NOW()),
  ('2024-04-01 21:45:00', 'unit10', 100.7, -137.0, 10, NOW(), NOW());

-- Insert data into "EDGEDeviceSettings" table
INSERT INTO "EDGEDeviceSettings" (edge_device_id, key, value, "createdAt", "updatedAt")
VALUES
  (1, 'key1', 'value1', NOW(), NOW()),
  (2, 'key2', 'value2', NOW(), NOW()),
  (3, 'key3', 'value3', NOW(), NOW()),
  (4, 'key4', 'value4', NOW(), NOW()),
  (5, 'key5', 'value5', NOW(), NOW()),
  (6, 'key6', 'value6', NOW(), NOW()),
  (7, 'key7', 'value7', NOW(), NOW()),
  (8, 'key8', 'value8', NOW(), NOW()),
  (9, 'key9', 'value9', NOW(), NOW()),
  (10, 'key10', 'value10', NOW(), NOW());

-- Insert data into "DeviceTracks" table
INSERT INTO "DeviceTracks" (tracker_device_id, longitude, latitude, precision, probetime, rssi, "createdAt", "updatedAt")
VALUES
  (1, 123.456, 78.910, 1, '2024-04-01 12:45:00', -90.2, NOW(), NOW()),
  (1, 135.792, 68.943, 2, '2024-04-01 13:45:00', -95.4, NOW(), NOW()),
  (3, 147.258, 58.967, 3, '2024-04-01 14:45:00', -100.6, NOW(), NOW()),
  (4, 159.753, 48.926, 4, '2024-04-01 15:45:00', -105.8, NOW(), NOW()),
  (5, 171.429, 38.883, 5, '2024-04-01 16:45:00', -111.0, NOW(), NOW()),
  (6, 183.278, 28.840, 6, '2024-04-01 17:45:00', -116.2, NOW(), NOW()),
  (7, 195.312, 18.797, 7, '2024-04-01 18:45:00', -121.4, NOW(), NOW()),
  (8, 207.535, 8.754, 8, '2024-04-01 19:45:00', -126.6, NOW(), NOW()),
  (9, 219.949, -1.289, 9, '2024-04-01 20:45:00', -131.8, NOW(), NOW()),
  (10, 232.556, -11.332, 10, '2024-04-01 21:45:00', -137.0, NOW(), NOW());
