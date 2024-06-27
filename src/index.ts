import express from 'express';
import { getSequelizeClient } from './sequelize/sequelizeClient.ts';
import 'dotenv/config'
import mqttClientProvider from './middleware/mqttClient.ts';
import edgeRouter from './routes/edge/edgeRouter.ts';
import path from 'path';
import { readSQLFile } from './utils/sqlReader.ts';

const port = 3000;
const app = express();


try {
  const sequelize = await getSequelizeClient()
  // testdata
  const sqlFilePath = path.join(process.cwd(), 'seed.sql');
  const sql = await readSQLFile(sqlFilePath) as string
  await sequelize.query(sql);

} catch (error) {
  console.log('Unable to connect to the database', error);
  process.exit(1);
}

app.use(express.json());
app.use(mqttClientProvider)
app.use('/edge', edgeRouter)

app.listen(port, () => {
  console.log(`Listening to port: ${port}!`);
});
