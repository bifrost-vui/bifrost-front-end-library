export interface IIcon {
    name: string;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'huge';
    color: null | 'success' | 'neutral' | 'warning' | 'negative';
    reversed: boolean;
    class: string;
}
