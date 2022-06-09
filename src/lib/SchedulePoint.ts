import nodeSchedule from 'node-schedule';
import { openNexus } from './OpenNexus';

export function schedulePoint() {
  /**
   * Times when points must be scored
   */
  const pointHoursDefault = [8, 12, 13, 18];
  const pointHoursFriday = [8, 12, 13, 17];

  nodeSchedule.scheduleJob('0 * * * *', () => {
    const currentDate = new Date();

    const currentHour = currentDate.getHours();

    const isFriday = currentDate.getDay() === 5;

    const pointHours = isFriday ? pointHoursFriday : pointHoursDefault;

    const isPointHour = pointHours.includes(currentHour);

    if (isPointHour)
      openNexus();
  });
}