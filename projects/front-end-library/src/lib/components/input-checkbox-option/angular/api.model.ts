export interface IInputCheckboxOption {
    id: string;
    name: string;
    value: string;
    isChecked: boolean;
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
