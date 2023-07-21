import { Module } from '@nestjs/common';
import { CredentialStatusController } from './credentialStatus.controller';
import { CredentialStatusService } from './credentialStatus.service';
import { VIDCHAIN, OPENID } from '../../config';
import { EntityInfo } from '../shared/infrastructure/vidchainApi/authenticationVIDchainAPI';
import { VIDchainAPIConnector } from '../shared/infrastructure/vidchainApi/vidcahinAPIConnector';
import { RevocationStatus } from '../shared/infrastructure/vidchainApi/revocationStatus';

const entityInfo = {
  provide: 'EntityInfo',
  useFactory: () => {
    const config: EntityInfo = {
      iss: VIDCHAIN.ISS,
      apiKey: VIDCHAIN.API_KEY,
    };
    return config;
  },
};

const openIdAPIUrl = {
  provide: 'OpenIdAPIUrl',
  useFactory: () => {
    return OPENID.URL;
  },
};

const vidchainAPIUrl = {
  provide: 'VIDchainAPIUrl',
  useFactory: () => {
    return VIDCHAIN.URL;
  },
};

@Module({
  imports: [],
  controllers: [CredentialStatusController],
  providers: [
    entityInfo,
    vidchainAPIUrl,
    openIdAPIUrl,
    RevocationStatus,
    CredentialStatusService,
    VIDchainAPIConnector,
  ],
})
export class CredentialStatusModule {}
