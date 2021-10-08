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

  const response = await qrpoint.post('checkpoint', point, { headers });

  console.log('🚀 ~ file: ScoredPoint.ts ~ line 15 ~ scoredPoint ~ response', response.data);
  console.log('Scored Point! ✅');
}