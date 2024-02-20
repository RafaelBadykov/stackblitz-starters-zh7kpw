import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscriber, animationFrame, asap, async, from, interval, multicast, observeOn, of, queue, refCount, startWith, subscribeOn } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Observable part:

    // const observable = new Observable((subscriber: Subscriber<any>) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => subscriber.next("After a second emited value 4"), 1000);
    //   subscriber.complete();
    //   subscriber.unsubscribe();
    // })

    // observable.subscribe((value: any) => {
    //   console.log("New Emmited Value: ", value);
    // })

    // observable.subscribe((value: any) => {
    //   console.log("New Emmited Value: ", value);
    // })

    // Subjects Part: 

    // Subject
    // const subject = new Subject<any>();
    // subject.subscribe((value: any) => console.log("s1", value));
    // subject.next("first emit");
    // subject.next("Second emit");
    // subject.subscribe((value: any) => console.log("s2", value));
    // subject.next("Third emit");
    // subject.complete()
    // subject.unsubscribe();

    // ReplaySubject
    // const replaySubject = new ReplaySubject<any>(3);
    // replaySubject.subscribe((value: any) => console.log("rs1", value));
    // replaySubject.next("first emit");
    // replaySubject.next("Second emit");
    // replaySubject.subscribe((value: any) => console.log("rs2", value));
    // replaySubject.next("Third emit");
    // replaySubject.complete()
    // replaySubject.unsubscribe();

    // BehaviorSubject
    // const behaviorSubject = new BehaviorSubject<any>("Initial emit");
    // behaviorSubject.subscribe((value: any) => console.log("bs1", value));
    // behaviorSubject.next("first emit");
    // behaviorSubject.next("Second emit");
    // behaviorSubject.subscribe((value: any) => console.log("bs2", value));
    // behaviorSubject.next("Third emit");
    // behaviorSubject.subscribe((value: any) => console.log("bs3", value));
    // behaviorSubject.complete();
    // behaviorSubject.unsubscribe();

    // AsyncSubject
    // const asyncSubject = new AsyncSubject<any>();
    // asyncSubject.subscribe((value: any) => console.log("as1", value));
    // asyncSubject.next("first emit");
    // // asyncSubject.complete();
    // asyncSubject.next("Second emit");
    // asyncSubject.subscribe((value: any) => console.log("as2", value));
    // asyncSubject.next("Third emit");
    // asyncSubject.subscribe((value: any) => console.log("as3", value));
    // asyncSubject.complete();
    // asyncSubject.unsubscribe();
    
    // Multicast
    // const subject = new Subject();
    // const refCounted = interval(3).pipe(
    //    multicast(subject),
    //    refCount()
    // );

    //  let sub1: any;
    //  let sub2: any;

    // sub1 = refCounted.subscribe((vl) =>
    //      console.log(`1st: ${vl}`)
    //   );

    // setTimeout(
    //     () => (sub2 = refCounted.subscribe((vl) =>
    //            console.log(`2nd: ${vl}`)
    //           )),
    //     500
    // );
    // setTimeout(() => sub1.unsubscribe(), 1500);
    // setTimeout(() => sub2.unsubscribe(), 2000);

    // Scheduler
    // from(['b', 'c', 'd'])
    //   .pipe(startWith('Async scheduler', async))
    //   .subscribe((vl) => console.log(vl));

    // from(['b', 'c', 'd'])
    //   .pipe(
    //     startWith(
    //       'Animation frame scheduler',
    //       animationFrame
    //     )
    //   )
    //   .subscribe((vl) => console.log(vl));

    //   from(['b', 'c', 'd'])
    //   .pipe(startWith('Queue scheduler', queue))
    //   .subscribe((vl) => console.log(vl));

    //   from(['b', 'c', 'd'])
    //   .pipe(startWith('Asap scheduler', asap))
    //   .subscribe((vl) => console.log(vl));

    // console.log('Before');

    // of(9)
    //   .pipe(observeOn(asap))
    //   .subscribe((vl) => console.log('Value is: ', vl));

    // console.log('After');


    // console.log('Before');

    // of(9)
    //   .pipe(subscribeOn(asap))
    //   .subscribe((vl) => console.log('Value is: ', vl));

    // console.log('After');
  }
}
