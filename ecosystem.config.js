module.exports = {
  apps: [
    {
      name: 'blueheaven8010',
      script: 'npx',
      args: 'serve@latest out --listen 8010',
      env: {
        PORT: 8010,
        NODE_ENV: 'production',
      },
    },
  ],
};
