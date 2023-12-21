export interface IChip {
    background?: 'ground' | 'underground';
    class?: string;
    deleteButton?: string;
    deleteButtonAriaLabel?: string;
    id?: string;
    isDisabled?: boolean;
    isUppercase?: boolean;
    label: string;
    size?: 'small' | 'medium';
}
