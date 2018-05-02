import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SvgDraw} from './svgDraw';

import 'snapsvg-cjs';

declare var Snap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('svgContainer') svgContainer: ElementRef;
  @ViewChild('svg1') svg1: ElementRef;
  @ViewChild('path1') path1: ElementRef;
  @ViewChild('path2') path2: ElementRef;
  @ViewChild('path3') path3: ElementRef;
  @ViewChild('path4') path4: ElementRef;
  @ViewChild('path5') path5: ElementRef;
  @ViewChild('path6') path6: ElementRef;
  @ViewChild('path7') path7: ElementRef;
  @ViewChild('teal') teal: ElementRef;
  @ViewChild('orange') orange: ElementRef;
  @ViewChild('red') red: ElementRef;
  @ViewChild('aqua') aqua: ElementRef;
  @ViewChild('green') green: ElementRef;
  @ViewChild('purple') purple: ElementRef;



  @ViewChild('tdm') tdm: ElementRef;
  @ViewChild('lc') lc: ElementRef;
  @ViewChild('btc') btc: ElementRef;
  @ViewChild('tdh1') tdh1: ElementRef;
  @ViewChild('tdh2') tdh2: ElementRef;
  @ViewChild('machine1') machine1: ElementRef;
  @ViewChild('machine2') machine2: ElementRef;
  @ViewChild('machine3') machine3: ElementRef;


  snapSVG: any;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.snapSVG = Snap('#svg1');
    this.connectAll();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.connectAll();
  }

  connectAll() {
    this.svg1.nativeElement.setAttribute('height', 0);
    this.svg1.nativeElement.setAttribute('width', 0);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path1.nativeElement,
      this.tdh1.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path2.nativeElement,
      this.tdh2.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path3.nativeElement,
      this.machine1.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path4.nativeElement,
      this.machine2.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path5.nativeElement,
      this.machine3.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path6.nativeElement,
      this.lc.nativeElement, this.tdm.nativeElement);
    SvgDraw.connectElements(this.svgContainer.nativeElement, this.svg1.nativeElement, this.path7.nativeElement,
      this.btc.nativeElement, this.tdm.nativeElement);

  }
}
