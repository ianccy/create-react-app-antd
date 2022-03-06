const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // you can change theme with variable
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
