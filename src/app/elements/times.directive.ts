import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimes') set render(times: number) {
    this.viewContainerRef.clear();

    Array(times)
      .fill(null)
      .forEach((_) => {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {});
      });
  }
}
