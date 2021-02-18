import { YMaps, Map } from 'react-yandex-maps';

const ContactMoscow = () => (
  <YMaps >
    <div >
      Moscow, Cremlin! 
      <Map defaultState={{ center: [43.324718, 45.692447], zoom: 14 }} />
    </div>
  </YMaps>
);
  
  export default ContactMoscow;
