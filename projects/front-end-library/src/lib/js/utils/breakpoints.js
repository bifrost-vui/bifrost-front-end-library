import { cleanString } from './string-format';

export const breakpoints = {
    xs: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-xs'), 'px')),
    sm: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-sm'), 'px')),
    md: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-md'), 'px')),
    lg: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-lg'), 'px')),
    xl: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-xl'), 'px')),
    xxl: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-xxl'), 'px')),
};

/* Breakpoints function */
export function isBreakpointUpXS() {
    return window.screen.availWidth >= breakpoints.xs;
}
export function isBreakpointUpSM() {
    return window.screen.availWidth >= breakpoints.sm;
}
export function isBreakpointUpMD() {
    return window.screen.availWidth >= breakpoints.md;
}
export function isBreakpointUpLG() {
    return window.screen.availWidth >= breakpoints.lg;
}
export function isBreakpointUpXL() {
    return window.screen.availWidth >= breakpoints.xl;
}
export function isBreakpointUpXXL() {
    return window.screen.availWidth >= breakpoints.xxl;
}

/* Device type */
export function isMobileUp() {
    return window.screen.availWidth >= breakpoints.xs;
}

export function isTabletUp() {
    return window.screen.availWidth >= breakpoints.md;
}

export function isDesktopUp() {
    return window.screen.availWidth >= breakpoints.lg;
}

export function isInMediaBreakpointUp(breakpoint) {
    switch (breakpoint) {
        case 'xs':
            return isMobileUp();
            break;
        case 'md':
            return isTabletUp();
            break;
        case 'lg':
            return isDesktopUp();
            break;
    }
}
