const dataFilters = [
    {
        dataCheckboxes: {
            id: 'brand_filter_options',
            name: 'brand_filter_options',
            options: [
                {
                    id: 'brand_Apple',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Apple',
                    labelTypography: 'paragraph-default',
                    value: 'Apple',
                },
                {
                    id: 'brand_Samsung',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Samsung',
                    labelTypography: 'paragraph-default',
                    value: 'Samsung',
                },
                {
                    id: 'brand_Google',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Google',
                    labelTypography: 'paragraph-default',
                    value: 'Google',
                },
                {
                    id: 'brand_Motorola',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Motorola',
                    labelTypography: 'paragraph-default',
                    value: 'Motorola',
                },
                {
                    id: 'brand_TLC',
                    isChecked: false,
                    isDisabled: false,
                    label: 'TLC',
                    labelTypography: 'paragraph-default',
                    value: 'TLC',
                },
                {
                    id: 'brand_LG',
                    isChecked: false,
                    isDisabled: false,
                    label: 'LG',
                    labelTypography: 'paragraph-default',
                    value: 'LG',
                },
                {
                    id: 'brand_Alcatel',
                    isChecked: false,
                    isDisabled: true,
                    label: 'Alcatel',
                    labelTypography: 'paragraph-default',
                    value: 'Alcatel',
                },
            ],
        },
        id: 'brand_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Brand',
    },
    {
        dataCheckboxes: {
            id: 'capacity_filter_options',
            name: 'capacity_filter_options',
            options: [
                {
                    id: 'capacity_32Go',
                    isChecked: false,
                    isDisabled: false,
                    label: '32 Go',
                    labelTypography: 'paragraph-default',
                    value: '32 Go',
                },
                {
                    id: 'capacity_64Go',
                    isChecked: false,
                    isDisabled: false,
                    label: '64 Go',
                    labelTypography: 'paragraph-default',
                    value: '64 Go',
                },
                {
                    id: 'capacity_128Go',
                    isChecked: false,
                    isDisabled: false,
                    label: '128 Go',
                    labelTypography: 'paragraph-default',
                    value: '128 Go',
                },
                {
                    id: 'capacity_256Go',
                    isChecked: false,
                    isDisabled: false,
                    label: '256 Go',
                    labelTypography: 'paragraph-default',
                    value: '256 Go',
                },
                {
                    id: 'capacity_512Go',
                    isChecked: false,
                    isDisabled: false,
                    label: '512 Go',
                    labelTypography: 'paragraph-default',
                    value: '512 Go',
                },
            ],
        },
        id: 'capacity_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Capacity',
    },
    {
        dataSlider: {
            max: {
                description: '$999/month',
                inputId: 'inputIdMax',
                legend: 'Maximum',
                value: 999,
            },
            min: {
                description: '$0/month',
                inputId: 'inputIdMin',
                legend: 'Minimum',
                value: 0,
            },
            minimumGap: 10,
            step: 1,
            unitLabel: '$',
            unitPosition: 'start',
            value: [0, 999],
        },
        id: 'monthly_price_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Monthly price',
    },
    {
        dataCheckboxes: {
            id: 'color_filter_options',
            name: 'color_filter_options',
            options: [
                {
                    id: 'color_Black',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Black',
                    labelTypography: 'paragraph-default',
                    value: 'Black',
                },
                {
                    id: 'color_Blue',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Blue',
                    labelTypography: 'paragraph-default',
                    value: 'Blue',
                },
                {
                    id: 'color_Brown',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Brown',
                    labelTypography: 'paragraph-default',
                    value: 'Brown',
                },
                {
                    id: 'color_Gold',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Gold',
                    labelTypography: 'paragraph-default',
                    value: 'Gold',
                },
                {
                    id: 'color_Green',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Green',
                    labelTypography: 'paragraph-default',
                    value: 'Green',
                },
                {
                    id: 'color_Grey',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Grey',
                    labelTypography: 'paragraph-default',
                    value: 'Grey',
                },
                {
                    id: 'color_Red',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Red',
                    labelTypography: 'paragraph-default',
                    value: 'Red',
                },
                {
                    id: 'color_Rose',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Rose',
                    labelTypography: 'paragraph-default',
                    value: 'Rose',
                },
                {
                    id: 'color_Silver',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Silver',
                    labelTypography: 'paragraph-default',
                    value: 'Silver',
                },
                {
                    id: 'color_Violet',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Violet',
                    labelTypography: 'paragraph-default',
                    value: 'Violet',
                },
                {
                    id: 'color_White',
                    isChecked: false,
                    isDisabled: false,
                    label: 'White',
                    labelTypography: 'paragraph-default',
                    value: 'White',
                },
                {
                    id: 'color_Yellow',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Yellow',
                    labelTypography: 'paragraph-default',
                    value: 'Yellow',
                },
            ],
        },
        id: 'color_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Color',
    },
    {
        dataCheckboxes: {
            id: 'promotions_filter_options',
            name: 'promotions_filter_options',
            options: [
                {
                    id: 'promotions_Lowered_Price',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Lowered Price',
                    labelTypography: 'paragraph-default',
                    value: 'Lowered Price',
                },
                {
                    id: 'promotions_New',
                    isChecked: false,
                    isDisabled: false,
                    label: 'New',
                    labelTypography: 'paragraph-default',
                    value: 'New',
                },
                {
                    id: 'promotions_Takeback_Credit',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Takeback Credit',
                    labelTypography: 'paragraph-default',
                    value: 'Takeback Credit',
                },
            ],
        },
        id: 'promotions_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Promotions',
    },
    {
        dataCheckboxes: {
            id: 'availability_filter_options',
            name: 'availability_filter_options',
            options: [
                {
                    id: 'availability_In_Stock',
                    isChecked: false,
                    isDisabled: false,
                    label: 'In Stock',
                    labelTypography: 'paragraph-default',
                    value: 'In Stock',
                },
                {
                    id: 'availability_Pre-order',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Pre-order',
                    labelTypography: 'paragraph-default',
                    value: 'Pre-order',
                },
            ],
        },
        id: 'availability_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Availability',
    },
    {
        dataCheckboxes: {
            id: 'os_filter_options',
            name: 'os_filter_options',
            options: [
                {
                    id: 'os_filter_Android',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Android',
                    labelTypography: 'paragraph-default',
                    value: 'Android',
                },
                {
                    id: 'os_filter_iOS',
                    isChecked: false,
                    isDisabled: false,
                    label: 'iOS',
                    labelTypography: 'paragraph-default',
                    value: 'iOS',
                },
            ],
        },
        id: 'os_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'Operating Systems',
    },
    {
        dataCheckboxes: {
            id: 'state_filter_options',
            name: 'state_filter_options',
            options: [
                {
                    id: 'state_New',
                    isChecked: false,
                    isDisabled: false,
                    label: 'New',
                    labelTypography: 'paragraph-default',
                    value: 'New',
                },
                {
                    id: 'state_Refurbished',
                    isChecked: false,
                    isDisabled: false,
                    label: 'Refurbished',
                    labelTypography: 'paragraph-default',
                    value: 'Refurbished',
                },
            ],
        },
        id: 'state_filter',
        isDisabled: false,
        isExpandedByDefault: true,
        title: 'State',
    },
];
