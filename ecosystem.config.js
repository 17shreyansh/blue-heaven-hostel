module.exports = {
  apps: [
    {
      name: 'blueheaven8010',
      script: 'npx',
      args: 'serve@latest out',
      env: {
        PORT: 8010,
        NODE_ENV: 'production',
      },
    },
  ],
};
