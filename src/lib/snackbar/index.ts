import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '../cdk/overlay';
import { PortalModule } from '../cdk/portal';

import { MdcSnackbarContainer } from './snackbar-container.component';

import {
  MdcSnackbarComponent,
  MdcSnackbarText,
  MdcSnackbarActionWrapper,
} from './snackbar.component';

import { MdcSnackbarService } from './snackbar.service';

import {
  MDC_SNACK_BAR_DATA,
  MdcSnackbarConfig,
} from './snackbar-config';

import { MdcSnackbarRef } from './snackbar-ref';

const SNACKBAR_COMPONENTS = [
  MdcSnackbarComponent,
  MdcSnackbarContainer,
  MdcSnackbarText,
  MdcSnackbarActionWrapper,
];

@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
  ],
  exports: [SNACKBAR_COMPONENTS],
  declarations: [SNACKBAR_COMPONENTS],
  providers: [MdcSnackbarService],
  entryComponents: [
    MdcSnackbarComponent,
    MdcSnackbarContainer
  ],
})
export class MdcSnackbarModule { }

export * from './snackbar.component';
export * from './snackbar-container.component';
export * from './snackbar.service';
export * from './snackbar-config';
export * from './snackbar-ref';
