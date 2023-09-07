export interface IButton {
    ariaControls?: string;
    ariaExpanded?: string;
    ariaLabel?: string;
    class?: string;
    dataDismiss?: string;
    dataTarget?: string;
    dataToggle?: string;
    extraAttribute?: string;
    formAction?: string;
    formEncryptionType?: null | 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    formId?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: null | '_self' | '_blank' | '_parent' | '_top';
    fullWidth?: boolean;
    hierarchy?: TButtonHierarchy;
    href?: string;
    iconName?: string;
    iconPosition?: 'left' | 'right';
    id?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSubmit?: boolean;
    label: string;
}

export type TButtonHierarchy = 'primary' | 'primary-alt' | 'secondary' | 'tertiary';
