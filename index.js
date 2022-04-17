const { ee } = require('./ee');

const e = ee();

const callback = () => console.log('once');

e.on('sound', (a) => {
    console.log('echoo', a);
});

e.on('sound', () => {
    console.log('BOOM BOOM!');
});

e.on('sound' , callback);
e.on('sound' , callback);
e.on('sound' , callback);

e.emit('sound', 1);
