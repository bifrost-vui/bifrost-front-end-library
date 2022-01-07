export const slides = [
    {
        badge       : {
            label       : "badge label with icon",
            iconName    : "camera"
        },
        upperTitle  : "Upper Title",
        title       : "Slide Title",
        subtitle    : "Subtitle",
        description : "Description description description description description description description description description",
        buttons     : [
            {
                label       : "Button",
                hierarchy   : "primary-alt",
                class       : "my-class"
            }
        ],
        background      : "highlight",
    },
    {
        upperTitle  : "Upper Title",
        title       : "Slide Title",
        subtitle    : "subtitle",
        description : "Description text",
        buttons     : [
            {
                label       : "Button",
                hierarchy   : "primary-alt",
                class       : "my-class"
            }
        ],
        image       : {
            lg  : "/images/_docs/hero-helix.png",
            sm  : "/images/_docs/hero-helix-mobile.png",
            alt : "Helix"
        },
        background  : "ground",
    },
    {
        badge       : "Badge label",
        upperTitle  : "Upper Title",
        title       : "Slide title slide title slide title slide title slide title ",
        subtitle    : "Subtitle subtitle subtitle subtitle subtitle subtitle",
        buttons     : [
            {
                label       : "Button",
                hierarchy   : "primary-alt",
                class       : "my-class"
            }
        ],
        blockSelection  : {
            title               : 'My selection',
            month               : 'month',
            contentLists        : [
                {
                    title           : 'Samsung Galaxy Note 20 Utra 5G',
                    description     : 'Navy Blue, 128 Go',
                    price           : '$24.00',
                    saving          : '$30.00',
                    fullPrice       : '$150.00',
                },
                {
                    title           : 'All-inclusive 12 GB Mobile',
                    description     : 'Lorem ipsum',
                    price           : '$55.00',
                },
            ],
        },
        background  : "ground",
        reversed    : true,
    },
    {
        badge       : "badge label",
        upperTitle  : "Upper Title",
        title       : "Slide Title",
        subtitle    : "Subtitle subtitle subtitle subtitle ",
        buttons     : [
            {
                label       : "Button 1",
                hierarchy   : "primary-alt",
                class       : "my-class"
            },
            {
                label       : "Button 2",
                hierarchy   : "secondary",
                class       : "my-class"
            }
        ],
        image       : {
            lg         : "/images/_docs/hero-helix-reversed.png",
            md         : "/images/_docs/hero-helix-reversed-mobile.png",
            sm         : "/images/_docs/hero-helix-reversed-mobile.png",
            alt        : "Helix",
            isSplitted : true
        },
        reversed    : true,
    }
];