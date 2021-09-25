import nodeSchedule from 'node-schedule';
import { scoredPoint } from './ScoredPoint';

export function schedulePoint() {
  /**
   * Times when points must be scored
   */
  const pointHours = [8, 12, 13, 18];

  nodeSchedule.scheduleJob('0 * * * *', function() {
    var currentHour = new Date().getHours();

    var isPointHour = pointHours.includes(currentHour);

    if (isPointHour)
      scoredPoint();
  });
}