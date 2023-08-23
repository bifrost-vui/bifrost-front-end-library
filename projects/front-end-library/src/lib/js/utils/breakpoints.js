import { cleanString } from './string-format';

// TODO: Adjust "window.screen.availWidth" because it is not working as to get the browser's window width

export const breakpoints = {
    sm: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-sm'), 'px')),
    md: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-md'), 'px')),
    lg: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-lg'), 'px')),
    xl: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-xl'), 'px')),
    xxl: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-xxl'), 'px')),
};

export function isMobileUp() {
    return window.screen.availWidth >= breakpoints.sm;
}

export function isTabletUp() {
    return window.screen.availWidth >= breakpoints.md;
}

export function isDesktopUp() {
    return window.screen.availWidth >= breakpoints.lg;
}

export function isDesktopXlUp() {
    return window.screen.availWidth >= breakpoints.xl;
}

export function isDesktopXxlUp() {
    return window.screen.availWidth >= breakpoints.xxl;
}

export function isInMediaBreakpointUp(breakpoint) {
    switch (breakpoint) {
        case 'sm':
            return isMobileUp();
            break;
        case 'md':
            return isTabletUp();
            break;
        case 'lg':
            return isDesktopUp();
            break;
        case 'xl':
            return isDesktopXlUp();
            break;
        case 'xxl':
            return isDesktopXxlUp();
            break;
    }
}
