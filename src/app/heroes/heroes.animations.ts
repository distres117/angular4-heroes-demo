import { trigger, state, style, animate, transition } from '@angular/animations';


export const animations = [
    trigger('heroState', [
        state('*', style({
            backgroundcolor: '#eee',
            transform: 'scale(1)'
        })),
        state('active', style({
            backgroundcolor: '#cfd8dc',
            transform: 'scale(1.1)'
        })),
        transition('* => active', animate('100ms ease-in')),
        transition('active => *', animate('100ms ease-out'))
    ]),
    trigger('flyInOut',[
        state('*', style({transform: 'translate(0) scale(1)',opacity:1})),
        transition('void => *', [
            style({opacity:0, transform: 'scale(1.5)'}),
            animate('250ms ease-out')
        ]),
        transition('* => void', [
            animate('250ms ease-in', style({transform: 'translateX(100%)',opacity: 0}))
        ])
    ])
];