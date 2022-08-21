const path = require('path');

module.exports = ({ config }) => {
    /*config.module.rules.push({
        test: /\.svg\.twig$/,
        use: [
            {
                loader: 'url-loader',
            }
        ]
    });*/
    config.module.rules.push({
        test: /[^\.svg]\.twig$/,
        use: [
            {
                loader: 'twig-loader-x',
                options: {
                    namespaces: {
                        '@bf-components': path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/components'),
                        '@bf-sections': path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/sections'),
                        '@bf-utils'     : path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/utils')
                    }
                }
            },
        ],
    });

    /*config.node = {
        fs: "empty" // avoids error messages
    }*/
    config.node = {
        global: 'warn'
    }

    return config;
};