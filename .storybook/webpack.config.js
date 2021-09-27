const path = require('path');

module.exports = ({ config }) => {

    // Twig:
    config.module.rules.push({
        test: /\.twig$/,
        use: [
            {
                loader: 'twig-loader-x',
                options: {
                    namespaces: {
                        '@bf-components': path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/components'),
                        '@bf-utils'     : path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/utils')
                    }
                }
            },
        ],
    });

    config.node = {
        fs: "empty" // avoids error messages
    }
  
  return config;
};