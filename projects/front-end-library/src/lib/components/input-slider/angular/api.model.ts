export interface IInputSlider {
    class: string;
    isInverted: boolean;
    max: IInputSliderMinMax;
    min: IInputSliderMinMax;
    minimumGap: number;
    reversed: boolean;
    step: number;
    unitLabel: string;
    unitPosition: 'start' | 'end';
    value: number | number[];
}

export interface IInputSliderMinMax {
    description?: string;
    inputId: string;
    legend?: string;
    value: number;
}
