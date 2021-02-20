import { cleanString } from './string-format';

export const breakpoints = {
  sm: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-sm'), 'px')),
  md: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-md'), 'px')),
  lg: Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-lg'), 'px'))
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

export function isInMediaBreakpointUp(breakpoint) {
  switch (breakpoint) {
    case 'sm':  return isMobileUp();  break;
    case 'md':  return isTabletUp();   break;
    case 'lg':  return isDesktopUp();  break;
  }
}