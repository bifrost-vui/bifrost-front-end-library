export interface IButton {
    label: string;
    href: string;
    hierarchy: string;
    isDisabled: boolean;
    hasLoading: boolean;
    isLoading: boolean;
    fullWidth: boolean;

    iconName: string;
    iconSize: string;
    iconPosition: string;

    dataDismiss: string;
    dataToggle: string;
    dataTarget: string;
    ariaControls: string;
    ariaExpanded: string;
    ariaLabel: string;

    extraAttribute: string;
    class: string;
}
