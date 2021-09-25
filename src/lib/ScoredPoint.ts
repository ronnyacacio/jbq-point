import { qrpoint } from '../services/qrpoint';

export async function scoredPoint() {
  const point = {
    latitude: '',
    longitude: '',
    funcionario: process.env.EMPLOYEE,
    foto: '',
    wifi: true
  };

  await qrpoint.post('checkpoint', point);
  
  console.log('Scored Point! ✅');
}