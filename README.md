# e2e-monitor

monitor end to end test use puppeteer.

send load speed to influxdb ,show graph with grafana.

## create secret file creds.js

```nodejs
module.exports = {
    username: '<office account>',
    password: '<office password>'
  };
```