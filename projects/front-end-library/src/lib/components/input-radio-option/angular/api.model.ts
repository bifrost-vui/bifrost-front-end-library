export interface IInputRadioOption {
    id: string;
    name: string;
    value: boolean;
    label: HTMLElement;
    labelClass: string;
    labelExtraAttribute: string;
    isRequired: boolean;
    isDisabled: boolean;
    isInvalid: boolean;
    ariaLabel: string;
    extraAttribute: string;
    class: string;
}