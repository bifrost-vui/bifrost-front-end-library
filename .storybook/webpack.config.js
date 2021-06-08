const path = require('path');

module.exports = ({ config }) => {

  // Twig:
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
      },
    ],
  });

    // config.resolve = {
    //     alias: {
    //     '@components' : path.resolve(__dirname, '../', 'projects/front-end-library/src/lib/components'),
    //     '@components2' : path.resolve(__dirname, 'projects/front-end-library/src/lib/components'),
    //     },
    // };

  return config;
};