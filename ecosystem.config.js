module.exports = {
  apps: [
    {
      name: 'blueheaven8010',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 8010,
        NODE_ENV: 'production',
      },
    },
  ],
};
