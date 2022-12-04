const colors = [
    {
        name: 'Content',
        description: 'Meant to be used on text and SVG.',
        list: [
            {
                label            : 'Neutral Primary',
                name             : 'neutral-primary'
            },
            {
                label            : 'Neutral Secondary',
                name             : 'neutral-secondary'
            },
            {
                label            : 'Neutral Tertiary',
                name             : 'neutral-tertiary'
            },
            {
                label            : 'Highlight',
                name             : 'highlight',
                hasUtilityClass  : false,
            },
            {
                label            : 'Brand',
                name             : 'brand'
            },
        ]
    },
    {
        name: 'Background',
        description: 'Meant to be used on non-interactive visual elements.',
        list: [
            {
                label            : 'Ground',
                name             : 'bg-ground'
            },
            {
                label            : 'Underground',
                name             : 'bg-underground'
            },
            {
                label            : 'Highlight',
                name             : 'bg-highlight'
            },
            {
                label            : 'Overlay black 20%',
                name             : 'bg-overlay-black-20prct',
                hasUtilityClass  : false,
            },
            {
                label            : 'Overlay black 50%',
                name             : 'bg-overlay-black-50prct',
                hasUtilityClass  : false,
            }
        ]
    },
    {
        name: 'Background Action',
        description: 'Meant to be used on interactive visual elements.',
        list: [
            {
                label            : 'Action primary',
                name             : 'bg-action-primary'
            },
            {
                label            : 'Action primary hover',
                name             : 'bg-action-primary-hover'
            },
            {
                label            : 'Action secondary',
                name             : 'bg-action-secondary'
            },
            {
                label            : 'Action secondary hover',
                name             : 'bg-action-secondary-hover'
            },
            {
                label            : 'Action no bg hover',
                name             : 'bg-action-no-bg-hover'
            },
            {
                label            : 'Action disabled',
                name             : 'bg-action-disabled'
            },
            {
                label            : 'Action selected',
                name             : 'bg-action-selected',
                hasUtilityClass  : false,
            }
        ]
    },
    {
        name: 'Stroke',
        description: 'Meant to be used on borders.',
        list: [
            {
                label            : 'Primary',
                name             : 'stroke-primary',
                hasUtilityClass  : false,
                UtilityClassName : 'bf-border-color-primary'
            },
            {
                label            : 'Secondary',
                name             : 'stroke-secondary',
                hasUtilityClass  : false,
                UtilityClassName : 'bf-border-color-secondary'
            },
            {
                label            : 'Tertiary',
                name             : 'stroke-tertiary',
                hasUtilityClass  : false,
                UtilityClassName : 'bf-border-color-tertiary'
            },
            {
                label            : 'Highlight',
                name             : 'stroke-highlight',
                hasUtilityClass  : false,
                UtilityClassName : 'bf-border-color-highlight'
            },
        ]
    },
    {
        name: 'Feedback',
        description: 'Convey meaning through color for visual support element',
        list: [
            {
                label            : 'Neutral',
                name             : 'feedback-neutral',
                hasUtilityClass  : false
            },
            {
                label            : 'Success',
                name             : 'feedback-success',
                hasUtilityClass  : false
            },
            {
                label            : 'Warning',
                name             : 'feedback-warning',
                hasUtilityClass  : false
            },
            {
                label            : 'Negative',
                name             : 'feedback-negative',
                hasUtilityClass  : false
            },
        ]
    }
];

export default colors;