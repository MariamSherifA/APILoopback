import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {SoaDataSource} from '../datasources';

export interface ObjectService {
  getObject(   
  ): Promise<any>;
 
}

export class ObjectServiceProvider
  implements Provider<ObjectService>
{
  constructor(
    // search must match the name property in the datasource json file
    @inject('datasources.soa')
    protected dataSource: SoaDataSource = new SoaDataSource(),
  ) {}

  value(): Promise<ObjectService> {
    return getService(this.dataSource);
  }
}
