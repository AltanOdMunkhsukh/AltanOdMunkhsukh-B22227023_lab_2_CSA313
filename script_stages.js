import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 5 },   // warm-up
    { duration: '1m', target: 30 },   // ramp-up
    { duration: '30s', target: 100 }, // peak
    { duration: '30s', target: 0 },   // ramp-down
  ],
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}