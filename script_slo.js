import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 30,
  duration: "1m",
  thresholds: {
    http_req_duration: ['p(95)<340'], // SLO:   p95 (~227ms) × 1.5
    http_req_failed: ['rate<0.01'],   // SLO: error rate < 1%
  },
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}