const path = require('path');

module.exports = ({ config }) => {

  // Twig:
  config.module.rules.push({
    test: /\.twig$/,
    use: [
      {
        loader: 'twig-loader',
        options: {
            twigOptions: {
                allow_async: true,
                allowInlineIncludes: true,
                rethrow: true,
                namespaces: {
                    'atom': '/',
                }
            }
        }
      },
    ],
  });

//   config.resolve.alias = {
//       '@atom': path.resolve(__dirname, '../', ''),
//       '@decorators': path.resolve(__dirname, '../', 'utils/storybook/decorators'),
//     }

    config.node = {
      fs: "empty" // avoids error messages
  }
  
  return config;
};