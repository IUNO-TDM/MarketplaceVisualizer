import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {SvgDraw} from './svgDraw';

import 'snapsvg-cjs';
import {BlockexplorerComponent} from './blockexplorer/blockexplorer.component';
import {Transaction} from './blockexplorer/Transaction';

declare var Snap: any;
declare var mina: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  pathToAnimate: 'path1';
  elementToAnimate: 'rectangle';
  animationReversed: false;

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

  @ViewChild('container') container: ElementRef;

  @ViewChild('tdm') tdm: ElementRef;
  @ViewChild('lc') lc: ElementRef;
  @ViewChild('btc') btc: ElementRef;
  @ViewChild('tdh1') tdh1: ElementRef;
  @ViewChild('tdh2') tdh2: ElementRef;
  @ViewChild('machine1') machine1: ElementRef;
  @ViewChild('machine2') machine2: ElementRef;
  @ViewChild('machine3') machine3: ElementRef;


  @ViewChild('blockexplorer')blockexplorer: BlockexplorerComponent;

  snapSVG: any;
  machineSVG: any;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.snapSVG = Snap('#svg1');
    this.machineSVG = Snap('#machine1svg');
    this.connectAll();
    this.drawMachine(this.machineSVG);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.connectAll();
  }


  connectAll() {
    this.svg1.nativeElement.setAttribute('height', this.container.nativeElement.offsetHeight);
    this.svg1.nativeElement.setAttribute('width', this.container.nativeElement.offsetWidth);
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


  getAnimationPoint(path, objCenter, step, dist) {
    const point = Snap.path.getPointAtLength(path, step);
    const x = point.x - objCenter.x + dist * Math.cos((point.alpha - 90) / 180 * Math.PI);
    const y = point.y - objCenter.y + dist * Math.sin((point.alpha - 90) / 180 * Math.PI);
    return {x: x, y: y, alpha: point.alpha};

  }

  animate() {
    if (this.elementToAnimate === 'rectangle') {
      const animationObject = this.snapSVG.rect(0, 0, 50, 50);
      animationObject.attr({fill: '#f00', opacity: 0, strokeWidth: 1, stroke: '#ddd'});
      this.animateObject(animationObject);
    } else if (this.elementToAnimate === 'circle') {
      const animationObject = this.snapSVG.circle(0, 0, 25);
      animationObject.attr({fill: '#f00', opacity: 0, strokeWidth: 1, stroke: '#ddd'});
      this.animateObject(animationObject);
    } else if (this.elementToAnimate === 'star') {
      const animationObject = this.snapSVG.path('M25,0L30.9,19.2L50,19.1L34.5,30.9L40.5,50L25,38.2L9.5,50L15.5,30.9L0,19.1L19.1,19.1Z');
      animationObject.attr({fill: '#f00', opacity: 0, strokeWidth: 1, stroke: '#ddd'});
      this.animateObject(animationObject);
    } else if (this.elementToAnimate === 'bitcoin') {
      this.loadSVG('assets/bitcoin.svg', (fragment) => {
        const animationObject = fragment.select('g');
        this.snapSVG.append(animationObject);
        this.animateObject(animationObject);
      });
    } else if (this.elementToAnimate === 'offer') {
      this.loadSVG('assets/offer.svg', (fragment) => {
        const animationObject = fragment.select('g');
        this.snapSVG.append(animationObject);
        this.animateObject(animationObject);
      });
    } else if (this.elementToAnimate === 'offerrequest') {
      this.loadSVG('assets/offerrequest.svg', (fragment) => {
        const animationObject = fragment.select('g');
        this.snapSVG.append(animationObject);
        this.animateObject(animationObject);
      });
    } else if (this.elementToAnimate === 'licenseOrder') {
      this.loadSVG('assets/licenseOrder.svg', (fragment) => {
        const animationObject = fragment.select('g');
        this.snapSVG.append(animationObject);
        this.animateObject(animationObject);
      });
    } else if (this.elementToAnimate === 'license') {
      this.loadSVG('assets/license.svg', (fragment) => {
        const animationObject = fragment.select('g');
        this.snapSVG.append(animationObject);
        this.animateObject(animationObject);
      });
    }

  }

  animateObject(animationObject) {

    const animationObjectCenter = {x: animationObject.getBBox().cx, y: animationObject.getBBox().cy};
    const animation_path = this.snapSVG.select('#' + this.pathToAnimate);
    const animation_path_length = Snap.path.getTotalLength(animation_path);

    const reversed = this.animationReversed;
    const firstPoint = this.getAnimationPoint(animation_path, animationObjectCenter, reversed ? animation_path_length : 0, reversed ? -30 : 30);
    animationObject.transform('translate(' + firstPoint.x + ',' + firstPoint.y + ')');
    const self = this;
    Snap.animate(0, 100, function (step) {
      animationObject.attr('opacity', step / 100);
    }, 500, function () {
      Snap.animate(0, animation_path_length, function (step) {
        animationObject.attr('opacity', 1);
        const moveToPoint = self.getAnimationPoint(animation_path, animationObjectCenter, (reversed ? (animation_path_length - step) : step), (reversed ? -30 : 30));
        animationObject.transform('translate(' + moveToPoint.x + ',' + moveToPoint.y + ')');
      }, 5000, function () {
        Snap.animate(0, 100, function (step) {
          animationObject.attr('opacity', 1 - step / 100);
        }, 500, function () {
          animationObject.remove();
        });

      });
    });
  }


  loadSVG(path, callback) {
    Snap.load(path, function (loadedFragment) {
      callback(loadedFragment);
    });
  }


  drawMachine(svg) {
    const self = this;
    this.loadSVG('assets/machine.svg', function (fragment) {
      const machineSVG = fragment.select('svg');
      svg.append(machineSVG);
      const led = machineSVG.select('#LED');
      led.attr('opacity', 0);
      const cocktail = machineSVG.select('#COCKTAIL');
      cocktail.attr('opacity', 0);
      console.log('');

    });
  }

  startMachineAnimation(machine) {
    machine['animationActive'] = true;
    const led = machine.select('#LED');
    led.attr('opacity', 1);
    const cocktail = machine.select('#COCKTAIL');


    function checkAnimationStillActive() {
      if (machine['animationActive'] && machine['animationActive'] === true) {
        machineAnimation();
      }else {
        led.attr('opacity', 0);
        cocktail.attr('opacity', 0);
      }
    }

    function machineAnimation() {
      Snap.animate(0, 360, function(step){
        const m = new Snap.Matrix().rotate(-step, 200, 200);
        led.transform(m);
        cocktail.attr('opacity', Math.sin( step / 180 * Math.PI));
      }, 3000 , mina.linear, checkAnimationStillActive);
    }

    machineAnimation();
  }

  animateMachine1() {
    this.startMachineAnimation(this.machineSVG);
  }

  addTransaction() {
    let tx = new Transaction();
    tx.tx = "xsdcfvgbhnjmk";
    tx.date = new Date();
    tx.amount = 1;
    this.blockexplorer.addTransaction(tx);
  }

}
