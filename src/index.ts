import express from 'express';
import { getSequelizeClient } from './sequelize/sequelizeClient.ts';
import 'dotenv/config'

try {
  const sequelizer = getSequelizeClient()
  const s = await sequelizer;
  await s.authenticate();
  console.log('\x1b[32mConnected\x1b[0m  to database');
} catch (error) {
  console.log('Unable to connect to the database', error);
  process.exit(1);
}

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Listening to port: ${port}!`);
});
