const { execSync } = require('child_process');

module.exports = {
  apps: [{
    name: 'membriko',
    script: './scripts/start.sh',
    interpreter: 'bash',
    cwd: '/home/athena/membriko',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOSTNAME: '0.0.0.0',
    },
    // Resilience settings
    max_restarts: 10,
    min_uptime: '10s',
    restart_delay: 3000,
    exp_backoff_restart_delay: 100,
    max_memory_restart: '512M',
    // Logging
    error_file: '/home/athena/.pm2/logs/membriko-error.log',
    out_file: '/home/athena/.pm2/logs/membriko-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }],
};
