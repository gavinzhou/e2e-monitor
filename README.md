# e2e-monitor

## install telegraf agent 

```bash
wget https://dl.influxdata.com/telegraf/releases/telegraf-1.5.2-1.x86_64.rpm
sudo yum localinstall telegraf-1.5.2-1.x86_64.rpm
```

## install nodejs 9.4.0

## nodejs puppeteer 

```bash
npm i puppeteer
```

monitor end to end test use puppeteer.

send load speed to influxdb ,show graph with grafana.

## create secret file creds.js

```nodejs
module.exports = {
    username: '<office account>',
    password: '<office password>'
  };
```

## install puppeteer with Amazon linux or Centos7

```bash
sudo yum install cups-libs dbus-glib libXrandr libXcursor libXinerama cairo cairo-gobject pango

sudo rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/atk-2.22.0-3.el7.x86_64.rpm
$ sudo rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/at-spi2-atk-2.22.0-2.el7.x86_64.rpm
$ sudo rpm -ivh --nodeps http://mirror.centos.org/centos/7/os/x86_64/Packages/at-spi2-core-2.22.0-1.el7.x86_64.rpm
# Install GTK from fedora 20
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/g/GConf2-3.2.6-7.fc20.x86_64.rpm
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libXScrnSaver-1.2.2-6.fc20.x86_64.rpm
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libxkbcommon-0.3.1-1.fc20.x86_64.rpm
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libwayland-client-1.2.0-3.fc20.x86_64.rpm
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/l/libwayland-cursor-1.2.0-3.fc20.x86_64.rpm
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/20/Fedora/x86_64/os/Packages/g/gtk3-3.10.4-1.fc20.x86_64.rpm
# Install Gdk-Pixbuf from fedora 16
$ sudo rpm -ivh --nodeps http://dl.fedoraproject.org/pub/archive/fedora/linux/releases/16/Fedora/x86_64/os/Packages/gdk-pixbuf2-2.24.0-1.fc16.x86_64.rpm
```