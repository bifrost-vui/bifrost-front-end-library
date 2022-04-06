export interface IButton {
  label          : string;
  href           : string; //A button will become a link if `href` is defined
  hierarchy      : string;
  isDisabled     : boolean;
  hasLoading     : boolean;
  isLoading      : boolean;
  fullWidth      : boolean;
  iconName       : string;
  iconSize       : string; //This is not recommended to change the size of the icon.
  iconPosition   : string;
  dataDismiss    : string;
  dataToggle     : string;
  dataTarget     : string;
  ariaControls   : string;
  ariaExpanded   : string;
  ariaLabel      : string;
  extraAttribute : string;
  class          : string;
}