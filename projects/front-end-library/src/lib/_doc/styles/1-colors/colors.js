const colors = [
    {
        name: 'Content',
        description: 'Meant to be used on text and SVG. CSS class will affect only the "color" property.',
        list: [
            {
                label: 'Brand',
                name: 'brand',
                reversed: false,
            },
            {
                label: 'Primary Irreversible',
                name: 'primary-irreversible',
                reversed: false,
                note: 'This color does not change in "reversed mode".',
            },
            {
                label: 'Neutral Primary',
                name: 'neutral-primary',
            },
            {
                label: 'Neutral Secondary',
                name: 'neutral-secondary',
            },
            {
                label: 'Neutral Tertiary',
                name: 'neutral-tertiary',
            },
            {
                label: 'Highlight',
                name: 'highlight',
            },
        ],
    },
    {
        name: 'Background',
        description:
            'Meant to be used on non-interactive visual elements. CSS class will affect only the "background-color" property.',
        list: [
            {
                label: 'Ground',
                name: 'bg-ground',
            },
            {
                label: 'Underground',
                name: 'bg-underground',
            },
            {
                label: 'Highlight',
                name: 'bg-highlight',
                reversed: false,
            },
            {
                label: 'Overlay black 20%',
                name: 'bg-overlay-black-20prct',
                reversed: false,
            },
            {
                label: 'Overlay black 50%',
                name: 'bg-overlay-black-50prct',
                reversed: false,
            },
        ],
    },
    {
        name: 'Background Action',
        description:
            'Meant to be used on interactive visual elements. CSS class will affect only the "background-color" property.',
        list: [
            {
                label: 'Action primary',
                name: 'bg-action-primary',
                reversed: false,
            },
            {
                label: 'Action primary hover',
                name: 'bg-action-primary-hover',
                reversed: false,
            },
            {
                label: 'Action secondary',
                name: 'bg-action-secondary',
            },
            {
                label: 'Action secondary hover',
                name: 'bg-action-secondary-hover',
            },
            {
                label: 'Action no bg hover',
                name: 'bg-action-no-bg-hover',
            },
            {
                label: 'Action disabled',
                name: 'bg-action-disabled',
            },
            {
                label: 'Action selected',
                name: 'bg-action-selected',
                hasUtilityClass: false,
            },
        ],
    },
    {
        name: 'Stroke',
        description: 'Meant to be used on borders. CSS class will affect only the "border-color" property.',
        list: [
            {
                label: 'Primary',
                name: 'stroke-primary',
                hasUtilityClass: false,
                UtilityClassName: ['bf-border-color-primary'],
            },
            {
                label: 'Secondary',
                name: 'stroke-secondary',
                hasUtilityClass: false,
                UtilityClassName: ['bf-border-color-secondary'],
            },
            {
                label: 'Tertiary',
                name: 'stroke-tertiary',
                hasUtilityClass: false,
                UtilityClassName: ['bf-border-color-tertiary'],
            },
            {
                label: 'Highlight',
                name: 'stroke-highlight',
                hasUtilityClass: false,
                UtilityClassName: ['bf-border-color-highlight'],
                note: 'In Figma, it is named "Stroke active" instead of "Stroke Highlight".',
            },
        ],
    },
    {
        name: 'Feedback',
        description:
            'Convey meaning through color for visual support element. CSS classes for text, background-color and border.',
        list: [
            {
                label: 'Neutral',
                name: 'feedback-neutral',
                UtilityClassName: ['bf-color-bg-feedback-neutral', 'bf-border-feedback-neutral'],
                reversed: false,
            },
            {
                label: 'Success',
                name: 'feedback-success',
                UtilityClassName: ['bf-color-bg-feedback-success', 'bf-border-feedback-success'],
                reversed: false,
            },
            {
                label: 'Warning',
                name: 'feedback-warning',
                UtilityClassName: ['bf-color-bg-feedback-warning', 'bf-border-feedback-warning'],
                reversed: false,
            },
            {
                label: 'Negative',
                name: 'feedback-negative',
                UtilityClassName: ['bf-color-bg-feedback-negative', 'bf-border-feedback-negative'],
                reversed: false,
            },
        ],
    },
];

export default colors;
