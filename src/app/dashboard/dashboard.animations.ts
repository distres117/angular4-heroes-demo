import { trigger, state, style, animate, transition } from '@angular/animations';


export const animations = [
    trigger('initial', [
        state('*', style({
            opacity: 1,
            transform: 'scale(1)'
        })),
        state('void', style({
            opacity:0,
            transform: 'scale(1.5)'
        })),
        transition('void => *', animate('100ms'))
    ])
];