import { ViewContainerRef, InjectionToken } from '@angular/core';

export const MDC_SNACK_BAR_DATA = new InjectionToken<any>('MdcSnackbarData');

export class MdcSnackbarConfig {
  message: string = null;
  timeout?: number = 2750;
  actionHandler?: Function;
  actionText?: string = null;
  multiline?: boolean = false;
  actionOnBottom?: boolean = false;
  alignStart: boolean = false;

  /** The view container to place snack bar into. */
  viewContainerRef?: ViewContainerRef;
}
