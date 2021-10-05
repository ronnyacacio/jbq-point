import { qrpoint } from '../services/qrpoint';
import { headers } from '../config/headers';

export async function scoredPoint() {
  const point = {
    latitude: '',
    longitude: '',
    funcionario: process.env.EMPLOYEE,
    foto: '',
    wifi: true
  };

  await qrpoint.post('checkpoint', point, { headers });
  
  console.log('Scored Point! ✅');
}