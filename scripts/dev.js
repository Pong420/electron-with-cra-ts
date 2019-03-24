const exec = require('child_process').exec;
const net = require('net');

const client = new net.Socket();
const port = process.env.PORT || 3000;

let startedElectron = false;
const tryConnection = () =>
  client.connect({ port: port }, () => {
    client.end();
    if (!startedElectron) {
      console.log('starting electron');
      startedElectron = true;
      exec('npm run electron:dev');
    }
  });

exec('npm run electron:compile', tryConnection);

client.on('error', error => {
  setTimeout(tryConnection, 1000);
});
