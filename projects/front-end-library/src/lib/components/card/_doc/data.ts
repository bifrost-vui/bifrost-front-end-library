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
