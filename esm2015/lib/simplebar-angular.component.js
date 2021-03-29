/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import SimpleBar from 'simplebar/dist/simplebar-core.esm';
export class SimplebarAngularComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.SimpleBar = new SimpleBar(this.elRef.nativeElement, this.options || {});
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.SimpleBar.unMount();
        this.SimpleBar = null;
    }
}
SimplebarAngularComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-simplebar',
                host: { 'data-simplebar': 'init' },
                template: "<div class=\"simplebar-wrapper\">\n  <div class=\"simplebar-height-auto-observer-wrapper\">\n    <div class=\"simplebar-height-auto-observer\"></div>\n  </div>\n  <div class=\"simplebar-mask\">\n    <div class=\"simplebar-offset\">\n      <div class=\"simplebar-content-wrapper\">\n        <div class=\"simplebar-content\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"simplebar-placeholder\"></div>\n</div>\n<div class=\"simplebar-track simplebar-horizontal\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n<div class=\"simplebar-track simplebar-vertical\">\n  <div class=\"simplebar-scrollbar\"></div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["[data-simplebar]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap;-webkit-box-pack:start;justify-content:flex-start;align-content:flex-start;-webkit-box-align:start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:' ';display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;-webkit-box-flex:inherit;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:'';background:#000;border-radius:7px;left:2px;right:2px;opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;-webkit-transition:opacity linear;transition:opacity linear}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-track.simplebar-vertical .simplebar-scrollbar:before{top:2px;bottom:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before{height:100%;left:2px;right:2px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:2px;height:7px;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.hs-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}", "ngx-simplebar{display:block}"]
            }] }
];
/** @nocollapse */
SimplebarAngularComponent.ctorParameters = () => [
    { type: ElementRef }
];
SimplebarAngularComponent.propDecorators = {
    options: [{ type: Input, args: ['options',] }]
};
if (false) {
    /** @type {?} */
    SimplebarAngularComponent.prototype.options;
    /** @type {?} */
    SimplebarAngularComponent.prototype.elRef;
    /** @type {?} */
    SimplebarAngularComponent.prototype.SimpleBar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2ltcGxlYmFyLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvc2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFFTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sU0FBUyxNQUFNLG1DQUFtQyxDQUFDO0FBYTFELE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFNcEMsWUFBWSxLQUFpQjtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixJQUFJLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUU7Z0JBQ2xDLHFyQkFBaUQ7Z0JBS2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWhCQyxVQUFVOzs7c0JBa0JULEtBQUssU0FBQyxTQUFTOzs7O0lBQWhCLDRDQUFtQzs7SUFFbkMsMENBQWtCOztJQUNsQiw4Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBTaW1wbGVCYXIgZnJvbSAnc2ltcGxlYmFyL2Rpc3Qvc2ltcGxlYmFyLWNvcmUuZXNtJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICdzaW1wbGViYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc2ltcGxlYmFyJyxcbiAgaG9zdDogeyAnZGF0YS1zaW1wbGViYXInOiAnaW5pdCcgfSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpbXBsZWJhci1hbmd1bGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgJy4uLy4uLy4uL3NpbXBsZWJhci9zcmMvc2ltcGxlYmFyLmNzcycsXG4gICAgJy4vc2ltcGxlYmFyLWFuZ3VsYXIuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlYmFyQW5ndWxhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgnb3B0aW9ucycpIG9wdGlvbnM6IE9wdGlvbnM7XG5cbiAgZWxSZWY6IEVsZW1lbnRSZWY7XG4gIFNpbXBsZUJhcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbFJlZiA9IGVsUmVmO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLlNpbXBsZUJhciA9IG5ldyBTaW1wbGVCYXIodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMgfHwge30pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5TaW1wbGVCYXIudW5Nb3VudCgpO1xuICAgIHRoaXMuU2ltcGxlQmFyID0gbnVsbDtcbiAgfVxufVxuIl19