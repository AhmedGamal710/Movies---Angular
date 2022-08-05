import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective implements OnInit {
  constructor(private _Renderer2: Renderer2, private _ElementRef: ElementRef) {}
  ngOnInit(): void {
    this._Renderer2.listen('window', 'scroll', (e) => {
      if (scrollY >= 200) {
        this._Renderer2.addClass(this._ElementRef.nativeElement, 'fixed-top');
        this._Renderer2.setStyle(this._ElementRef.nativeElement,'background',' #131722')
      } else {
        this._Renderer2.removeClass(this._ElementRef.nativeElement, 'fixed-top');
        this._Renderer2.setStyle(this._ElementRef.nativeElement,'background',' rgb(0 0 0 / 0.2)')
      }
      
    });
    
  }
}
