const speedTest = require('speed-test');

speedTest().then(speed => {
    console.log(speed);
});
const cron = require('node-cron');

cron.schedule('*/15 * * * *', () => {
    speedTest().then(speed => {
        console.log(speed);
    });
});
