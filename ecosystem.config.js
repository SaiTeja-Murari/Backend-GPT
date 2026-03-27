module.exports = {
  apps: [
    {
      name: "backend-gpt",
      script: "server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8080
      }
    }
  ]
};
