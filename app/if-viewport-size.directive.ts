import { Directive, TemplateRef, ViewContainerRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { ScreenSizeService } from './screenSize.service';

@Directive({
  selector: '[ifViewportSize]'
})

export class IfViewportSizeDirective {

  listenFunc: Function;

  @Input() set ifViewportSize(type: string){
    this.updateView(type);
    this.listenFunc = this.render.listen("window", "resize", () => this.onResize(type));
  }

  constructor(private templateRef: TemplateRef<any>, 
              private vcRef: ViewContainerRef,
              private screenService: ScreenSizeService,
              private render: Renderer2) {
  }

  private updateView(type: string) {
    this.vcRef.clear();
    if (this.screenService.width === type){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      this.vcRef.clear();
    }
  }

  onResize(type: string){ 
    this.updateView(type);
  }

  ngOnDestroy(): void {
    this.listenFunc();
  }
}
