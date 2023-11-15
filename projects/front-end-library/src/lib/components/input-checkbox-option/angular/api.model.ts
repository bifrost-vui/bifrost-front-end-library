export interface IInputCheckboxOption {
    ariaLabel?: string;
    class?: string;
    extraAttribute?: string;
    id: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isRequired?: boolean;
    label?: HTMLElement;
    labelClass?: string;
    labelExtraAttribute?: string;
    labelTypography?: 'paragraph-default' | 'display-sub-medium';
    name?: string;
    value?: string;
}
