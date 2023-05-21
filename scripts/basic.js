//Este es un escenario de prueba de carga básico que simulará 10 usuarios virtuales (VU) que visitan una página web durante 30 segundos.

import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,  // número de usuarios virtuales
  duration: '30s',  // duración de la prueba
};

export default function () {
  http.get('https://dxc.com');
  sleep(1);
}
