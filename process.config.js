module.exports = {
  apps: [
    {
      name: "reja",
      script: "./server.js",
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
