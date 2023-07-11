import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {soaOperations} from './operations';

const config = {
  name: 'soa',
  connector: 'rest',
  baseURL: '',
  options: {
    strictSSL: false,
  },
  crud: false,
  operations: soaOperations,
};

@lifeCycleObserver('datasource')
export class SoaDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'soa';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.soa', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
