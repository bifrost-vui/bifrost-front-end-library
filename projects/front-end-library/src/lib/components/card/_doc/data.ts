export const contentLists = [
    {
        title: 'TV',
        description: '40 channels',
        content: [
            {
                label: 'Free and Unlimited Go after 10Go',
                icon: 'unlimited',
            },
            {
                label: '100 GB annual data in Canada',
                icon: 'hosting-data',
            },
            {
                label: 'Club illico included',
                icon: 'tv-plan-showtime',
            },
        ],
    },
    {
        title: 'Internet',
        description: 'Unlimited',
        content: [
            {
                label: 'Utilisation illimité',
                icon: 'tv-plan-showtime',
            },
            {
                label: "Vitesse de téléchargement jusqu'à 100mbit/s",
                icon: 'download-speed',
            },
        ],
    },
];

export const contentListsWithChannels = [
    {
        title: 'TV 5 choices',
        description: '28 channels',
        content: [
            {
                label: '23 basic HD channels',
                icon: 'helix-tv',
            },
            {
                label: '5 Popular channels of your choice',
                icon: 'tv-plan-showtime',
            },
        ],
        channels: {
            limited: [
                {
                    name: 'TVA',
                    imageSrc: '/images/_docs/channels/CFCMH.webp',
                },
                {
                    name: 'RDS',
                    imageSrc: '/images/_docs/channels/RDS.webp',
                },
                {
                    name: 'YOOHD',
                    imageSrc: '/images/_docs/channels/YOOHD.webp',
                },
                {
                    name: 'ABC',
                    imageSrc: '/images/_docs/channels/ABCHD.webp',
                },
                {
                    name: 'CTVHD',
                    imageSrc: '/images/_docs/channels/CTVHD.webp',
                },
            ],
            full: [
                {
                    tabData: {
                        ariaControls: 'tabContentIncluded',
                        ariaSelected: 'true',
                        class: 'active',
                        href: 'tabContentIncluded',
                        id: 'tabIncluded',
                        label: 'Included',
                    },
                    tabContent: {
                        ariaLabelledby: 'tabIncluded',
                        class: 'show active',
                        description: '<p><strong>23 channels included</strong></p>',
                        id: 'tabContentIncluded',
                        channelsList: [
                            {
                                name: 'ABC',
                                imageSrc: '/images/_docs/channels/ABCHD.webp',
                            },
                            {
                                name: 'AMI TÉLÉ',
                                imageSrc: '/images/_docs/channels/AMTLH.webp',
                            },
                            {
                                name: 'APTHD',
                                imageSrc: '/images/_docs/channels/APTHD.webp',
                            },
                            {
                                name: 'ARTHD',
                                imageSrc: '/images/_docs/channels/ARTHD.webp',
                            },
                            {
                                name: 'CASAH',
                                imageSrc: '/images/_docs/channels/CASAH.webp',
                            },
                            {
                                name: 'CBFTH',
                                imageSrc: '/images/_docs/channels/CBFTH.webp',
                            },
                            {
                                name: 'CBSHD',
                                imageSrc: '/images/_docs/channels/CBSHD.webp',
                            },
                            {
                                name: 'CFCMH',
                                imageSrc: '/images/_docs/channels/CFCMH.webp',
                            },
                            {
                                name: 'Citytv_Black',
                                imageSrc: '/images/_docs/channels/Citytv_Black.webp',
                            },
                            {
                                name: 'CTVHD',
                                imageSrc: '/images/_docs/channels/CTVHD.webp',
                            },
                            {
                                name: 'DHD',
                                imageSrc: '/images/_docs/channels/DHD.webp',
                            },
                            {
                                name: 'FOXHD',
                                imageSrc: '/images/_docs/channels/FOXHD.webp',
                            },
                            {
                                name: 'FR24H',
                                imageSrc: '/images/_docs/channels/FR24H.webp',
                            },
                            {
                                name: 'GLOHD',
                                imageSrc: '/images/_docs/channels/GLOHD.webp',
                            },
                            {
                                name: 'HIAHD',
                                imageSrc: '/images/_docs/channels/HIAHD.webp',
                            },
                            {
                                name: 'LCNHD',
                                imageSrc: '/images/_docs/channels/LCNHD.webp',
                            },
                            {
                                name: 'NBCHD',
                                imageSrc: '/images/_docs/channels/NBCHD.webp',
                            },
                            {
                                name: 'NVAB',
                                imageSrc: '/images/_docs/channels/NVAB.webp',
                            },
                            {
                                name: 'PBSHD',
                                imageSrc: '/images/_docs/channels/PBSHD.webp',
                            },
                            {
                                name: 'RDS',
                                imageSrc: '/images/_docs/channels/RDS.webp',
                            },
                            {
                                name: 'TQCHD',
                                imageSrc: '/images/_docs/channels/TQCHD.webp',
                            },
                            {
                                name: 'TSPHD',
                                imageSrc: '/images/_docs/channels/TSPHD.webp',
                            },
                            {
                                name: 'VRKHD',
                                imageSrc: '/images/_docs/channels/VRKHD.webp',
                            },
                            {
                                name: 'YOOHD',
                                imageSrc: '/images/_docs/channels/YOOHD.webp',
                            },
                            {
                                name: 'ZHD',
                                imageSrc: '/images/_docs/channels/ZHD.webp',
                            },
                            {
                                name: 'ABC',
                                imageSrc: '/images/_docs/channels/ABCHD.webp',
                            },
                            {
                                name: 'AMI TÉLÉ',
                                imageSrc: '/images/_docs/channels/AMTLH.webp',
                            },
                            {
                                name: 'APTHD',
                                imageSrc: '/images/_docs/channels/APTHD.webp',
                            },
                            {
                                name: 'ARTHD',
                                imageSrc: '/images/_docs/channels/ARTHD.webp',
                            },
                            {
                                name: 'CASAH',
                                imageSrc: '/images/_docs/channels/CASAH.webp',
                            },
                            {
                                name: 'CBFTH',
                                imageSrc: '/images/_docs/channels/CBFTH.webp',
                            },
                            {
                                name: 'CBSHD',
                                imageSrc: '/images/_docs/channels/CBSHD.webp',
                            },
                            {
                                name: 'CFCMH',
                                imageSrc: '/images/_docs/channels/CFCMH.webp',
                            },
                            {
                                name: 'Citytv_Black',
                                imageSrc: '/images/_docs/channels/Citytv_Black.webp',
                            },
                            {
                                name: 'CTVHD',
                                imageSrc: '/images/_docs/channels/CTVHD.webp',
                            },
                            {
                                name: 'DHD',
                                imageSrc: '/images/_docs/channels/DHD.webp',
                            },
                            {
                                name: 'FOXHD',
                                imageSrc: '/images/_docs/channels/FOXHD.webp',
                            },
                            {
                                name: 'FR24H',
                                imageSrc: '/images/_docs/channels/FR24H.webp',
                            },
                            {
                                name: 'GLOHD',
                                imageSrc: '/images/_docs/channels/GLOHD.webp',
                            },
                            {
                                name: 'HIAHD',
                                imageSrc: '/images/_docs/channels/HIAHD.webp',
                            },
                            {
                                name: 'LCNHD',
                                imageSrc: '/images/_docs/channels/LCNHD.webp',
                            },
                            {
                                name: 'NBCHD',
                                imageSrc: '/images/_docs/channels/NBCHD.webp',
                            },
                            {
                                name: 'NVAB',
                                imageSrc: '/images/_docs/channels/NVAB.webp',
                            },
                            {
                                name: 'PBSHD',
                                imageSrc: '/images/_docs/channels/PBSHD.webp',
                            },
                            {
                                name: 'RDS',
                                imageSrc: '/images/_docs/channels/RDS.webp',
                            },
                            {
                                name: 'TQCHD',
                                imageSrc: '/images/_docs/channels/TQCHD.webp',
                            },
                            {
                                name: 'TSPHD',
                                imageSrc: '/images/_docs/channels/TSPHD.webp',
                            },
                            {
                                name: 'VRKHD',
                                imageSrc: '/images/_docs/channels/VRKHD.webp',
                            },
                            {
                                name: 'YOOHD',
                                imageSrc: '/images/_docs/channels/YOOHD.webp',
                            },
                            {
                                name: 'ZHD',
                                imageSrc: '/images/_docs/channels/ZHD.webp',
                            },
                        ],
                    },
                },
                {
                    tabData: {
                        ariaControls: 'tabContentOfYourChoice',
                        ariaSelected: 'true',
                        class: '',
                        href: 'tabContentOfYourChoice',
                        id: 'tabOfYourChoice',
                        label: 'Of your choice',
                    },
                    tabContent: {
                        ariaLabelledby: 'tabOfYourChoice',
                        class: '',
                        description: '<p>This plan includes <strong>10 choices</strong></p>',
                        id: 'tabContentOfYourChoice',
                        channelsList: [
                            {
                                name: 'CTVHD',
                                imageSrc: '/images/_docs/channels/CTVHD.webp',
                            },
                            {
                                name: 'DHD',
                                imageSrc: '/images/_docs/channels/DHD.webp',
                            },
                            {
                                name: 'FOXHD',
                                imageSrc: '/images/_docs/channels/FOXHD.webp',
                            },
                            {
                                name: 'FR24H',
                                imageSrc: '/images/_docs/channels/FR24H.webp',
                            },
                            {
                                name: 'GLOHD',
                                imageSrc: '/images/_docs/channels/GLOHD.webp',
                            },
                            {
                                name: 'HIAHD',
                                imageSrc: '/images/_docs/channels/HIAHD.webp',
                            },
                            {
                                name: 'LCNHD',
                                imageSrc: '/images/_docs/channels/LCNHD.webp',
                            },
                            {
                                name: 'NBCHD',
                                imageSrc: '/images/_docs/channels/NBCHD.webp',
                            },
                            {
                                name: 'NVAB',
                                imageSrc: '/images/_docs/channels/NVAB.webp',
                            },
                            {
                                name: 'PBSHD',
                                imageSrc: '/images/_docs/channels/PBSHD.webp',
                            },
                            {
                                name: 'RDS',
                                imageSrc: '/images/_docs/channels/RDS.webp',
                            },
                            {
                                name: 'TQCHD',
                                imageSrc: '/images/_docs/channels/TQCHD.webp',
                            },
                            {
                                name: 'TSPHD',
                                imageSrc: '/images/_docs/channels/TSPHD.webp',
                            },
                            {
                                name: 'VRKHD',
                                imageSrc: '/images/_docs/channels/VRKHD.webp',
                            },
                            {
                                name: 'YOOHD',
                                imageSrc: '/images/_docs/channels/YOOHD.webp',
                            },
                            {
                                name: 'ZHD',
                                imageSrc: '/images/_docs/channels/ZHD.webp',
                            },
                            {
                                name: 'ABC',
                                imageSrc: '/images/_docs/channels/ABCHD.webp',
                            },
                            {
                                name: 'AMI TÉLÉ',
                                imageSrc: '/images/_docs/channels/AMTLH.webp',
                            },
                            {
                                name: 'APTHD',
                                imageSrc: '/images/_docs/channels/APTHD.webp',
                            },
                            {
                                name: 'ARTHD',
                                imageSrc: '/images/_docs/channels/ARTHD.webp',
                            },
                            {
                                name: 'CASAH',
                                imageSrc: '/images/_docs/channels/CASAH.webp',
                            },
                            {
                                name: 'CBFTH',
                                imageSrc: '/images/_docs/channels/CBFTH.webp',
                            },
                            {
                                name: 'CBSHD',
                                imageSrc: '/images/_docs/channels/CBSHD.webp',
                            },
                            {
                                name: 'CFCMH',
                                imageSrc: '/images/_docs/channels/CFCMH.webp',
                            },
                            {
                                name: 'Citytv_Black',
                                imageSrc: '/images/_docs/channels/Citytv_Black.webp',
                            },
                            {
                                name: 'CTVHD',
                                imageSrc: '/images/_docs/channels/CTVHD.webp',
                            },
                            {
                                name: 'DHD',
                                imageSrc: '/images/_docs/channels/DHD.webp',
                            },
                            {
                                name: 'FOXHD',
                                imageSrc: '/images/_docs/channels/FOXHD.webp',
                            },
                            {
                                name: 'FR24H',
                                imageSrc: '/images/_docs/channels/FR24H.webp',
                            },
                            {
                                name: 'GLOHD',
                                imageSrc: '/images/_docs/channels/GLOHD.webp',
                            },
                            {
                                name: 'HIAHD',
                                imageSrc: '/images/_docs/channels/HIAHD.webp',
                            },
                            {
                                name: 'LCNHD',
                                imageSrc: '/images/_docs/channels/LCNHD.webp',
                            },
                            {
                                name: 'NBCHD',
                                imageSrc: '/images/_docs/channels/NBCHD.webp',
                            },
                            {
                                name: 'NVAB',
                                imageSrc: '/images/_docs/channels/NVAB.webp',
                            },
                            {
                                name: 'PBSHD',
                                imageSrc: '/images/_docs/channels/PBSHD.webp',
                            },
                            {
                                name: 'RDS',
                                imageSrc: '/images/_docs/channels/RDS.webp',
                            },
                            {
                                name: 'TQCHD',
                                imageSrc: '/images/_docs/channels/TQCHD.webp',
                            },
                            {
                                name: 'TSPHD',
                                imageSrc: '/images/_docs/channels/TSPHD.webp',
                            },
                            {
                                name: 'VRKHD',
                                imageSrc: '/images/_docs/channels/VRKHD.webp',
                            },
                            {
                                name: 'YOOHD',
                                imageSrc: '/images/_docs/channels/YOOHD.webp',
                            },
                            {
                                name: 'ZHD',
                                imageSrc: '/images/_docs/channels/ZHD.webp',
                            },
                            {
                                name: 'ABC',
                                imageSrc: '/images/_docs/channels/ABCHD.webp',
                            },
                            {
                                name: 'AMI TÉLÉ',
                                imageSrc: '/images/_docs/channels/AMTLH.webp',
                            },
                            {
                                name: 'APTHD',
                                imageSrc: '/images/_docs/channels/APTHD.webp',
                            },
                            {
                                name: 'ARTHD',
                                imageSrc: '/images/_docs/channels/ARTHD.webp',
                            },
                            {
                                name: 'CASAH',
                                imageSrc: '/images/_docs/channels/CASAH.webp',
                            },
                            {
                                name: 'CBFTH',
                                imageSrc: '/images/_docs/channels/CBFTH.webp',
                            },
                            {
                                name: 'CBSHD',
                                imageSrc: '/images/_docs/channels/CBSHD.webp',
                            },
                            {
                                name: 'CFCMH',
                                imageSrc: '/images/_docs/channels/CFCMH.webp',
                            },
                            {
                                name: 'Citytv_Black',
                                imageSrc: '/images/_docs/channels/Citytv_Black.webp',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        title: 'Internet GIGA',
        description: '940 Unlimited',
        content: [
            {
                label: 'Download speed up to 940 mbps',
                icon: 'download-speed',
            },
            {
                label: 'Data Included Unlimited',
                icon: 'unlimited',
            },
        ],
    },
];

export const contentListsNoTitle = [
    {
        content: [
            {
                label: 'Free and Unlimited Go after 10Go',
                icon: 'unlimited',
            },
            {
                label: '100 GB annual data in Canada',
                icon: 'hosting-data',
            },
            {
                label: 'Club illico included',
                icon: 'tv-plan-absolute',
            },
        ],
    },
];
