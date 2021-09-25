import 'dotenv/config';

import express from 'express';
import { schedulePoint } from './lib/SchedulePoint';

const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
  schedulePoint();
});