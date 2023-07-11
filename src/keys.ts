import {BindingKey} from '@loopback/core';
import {
  ObjectService
} from './services';



// export namespace SentryServiceBindings {
//   export const SERVICE = 'services.SentryService';
// }

export namespace ServiceBindings {
  const services = 'services';
 
  
  export const GET_OBJECT = BindingKey.create<ObjectService>(
    `${services}.ObjectService`,
  );
}
