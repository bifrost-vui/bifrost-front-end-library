export interface IIcon {
    ariaLabel: string;
    class: string;
    color: null | 'success' | 'neutral' | 'warning' | 'negative';
    name: string;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'huge';
    reversed: boolean;
}
