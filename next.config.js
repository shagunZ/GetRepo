// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Add a rule for handling MP4 files
      config.module.rules.push({
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: `/_next/static/videos/`, // specify the public path for your videos
              outputPath: 'static/videos/', // specify the output directory for your videos
            },
          },
        ],
      });
  
      // For using file-loader on the server as well
      if (isServer) {
        const originalEntry = config.entry;
        config.entry = async () => {
          const entries = await originalEntry();
  
          if (entries['main.js'] && !entries['main.js'].includes('./server.js')) {
            entries['main.js'].unshift('./server.js');
          }
  
          return entries;
        };
      }
  
      return config;
    },
  };
  