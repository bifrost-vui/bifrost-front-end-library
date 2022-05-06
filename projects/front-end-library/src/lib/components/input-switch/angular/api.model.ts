export interface IInputSwitch {
    id: string;
    name: string;
    label: string | object;
    ariaLabel: string;
    isDisabled: boolean;
    isChecked: boolean;
    extraAttribute: string;
    class: string;
}