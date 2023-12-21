import { IInputCheckboxOption } from '../../input-checkbox-option/angular/api.model';
import { ISelectionTile } from '../../selection-tile/angular/api.model';

export interface IInputCheckbox {
    areOptionTiles?: boolean;
    areOptionTilesInline?: boolean;
    areOptionTilesLarge?: boolean;
    class?: string;
    description?: string;
    errorMessage?: string;
    label?: string;
    name: string;
    options: IInputCheckboxOption[] | ISelectionTile[];
}
