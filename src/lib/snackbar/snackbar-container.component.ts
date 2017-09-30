import {
  Component,
  ComponentRef,
  ElementRef,
  NgZone,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ComponentPortal, BasePortalHost, PortalHostDirective } from '../overlay';

@Component({
  selector: 'mdc-snackbar-container',
  template: `<ng-template cdkPortalHost></ng-template>`,
})
export class MdcSnackbarContainer extends BasePortalHost {
  @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;

  constructor(
    private _ngZone: NgZone,
    private _renderer: Renderer2,
    private _elementRef: ElementRef) {
    super();
  }

  /** Attach a component portal as content to this snack bar container. */
  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    if (this._portalHost.hasAttached()) {
      throw Error('Attempting to attach snack bar content after content is already attached');
    }

    return this._portalHost.attachComponentPortal(portal);
  }
}
