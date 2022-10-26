import { cleanString } from './string-format';

export const breakpoints = {
  sm: document.body ? Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-sm'), 'px')) : "0px",
  md: document.body ? Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-md'), 'px')) : "0px",
  lg: document.body ? Number(cleanString(getComputedStyle(document.body).getPropertyValue('--breakpoint-lg'), 'px')) : "0px"
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