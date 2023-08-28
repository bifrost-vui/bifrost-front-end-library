export interface IBadge {
    angle?: null | 'left' | 'right';
    class?: string;
    className?: string;
    customBgColor?: string;
    customFontColor?: string;
    hierarchy: 'primary' | 'secondary' | 'tertiary' | 'tertiary-ground';
    iconName?: string;
    isRounded?: boolean;
    label: string;
    noUppercase?: boolean;
}
