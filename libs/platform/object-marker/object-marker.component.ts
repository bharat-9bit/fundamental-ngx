import { Component, Input } from '@angular/core';

import { Nullable, warnOnce } from '@fundamental-ngx/cdk/utils';
import { ObjectMarkerComponent } from '@fundamental-ngx/core/object-marker';

/**
 * @deprecated
 * Use ObjectMarkerComponent from `@fundamental-ngx/core/object-marker` instead.
 */
@Component({
    selector: 'fdp-object-marker',
    templateUrl: './object-marker.component.html',
    standalone: true,
    imports: [ObjectMarkerComponent]
})
export class PlatformObjectMarkerComponent {
    /**
     * Glyph (icon) of the Object marker.
     */
    @Input()
    glyph: string;

    /** Whether the Object marker is clickable. */
    @Input()
    clickable: boolean;

    /** label for adding text to the marker */
    @Input()
    label: string;

    /** link for setting href value */
    @Input()
    link: string;

    /** Sets control aria-label attribute value */
    @Input()
    ariaLabel: Nullable<string>;

    /** Sets control aria-hiden to a boolean attribute value */
    @Input()
    ariaHidden: boolean;

    /** Sets control aria-title to a string attribute value */
    @Input()
    title: string;

    /** @hidden */
    constructor() {
        warnOnce(
            'PlatformObjectMarkerComponent is deprecated. Use ObjectMarkerComponent from `@fundamental-ngx/core/object-marker` instead.'
        );
    }
}
