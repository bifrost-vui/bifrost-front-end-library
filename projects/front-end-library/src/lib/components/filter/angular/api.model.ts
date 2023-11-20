import { IInputCheckbox } from '../../input-checkbox/angular/api.model';
import { IInputSlider } from '../../input-slider/angular/api.model';

export interface IFilter {
    class?: string;
    dataCheckboxes?: IInputCheckbox;
    dataSlider?: IInputSlider;
    id: string;
    idParent?: string;
    isDisabled?: boolean;
    isExpandedByDefault?: boolean;
    numberOfCheckboxesToDisplay?: number;
    title: string;
}
