const scheduler = require("node-schedule");

scheduler.scheduleJob('* * * * *', function() {
    console.log('schedule is running');
});