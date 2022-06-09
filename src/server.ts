import express from 'express';
import { schedulePoint } from './lib/SchedulePoint';

const port = 3333;

const app = express();

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}`);
  schedulePoint();
});