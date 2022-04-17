const ee = () => {
    const events = new Map();
    return {
        on: (name, callback) => {
            const event = events.get(name) || new Set();
            event.add(callback);
            events.set(name, event);
        },
        emit: (name, ...args) => {
            if (events.has(name)) {
                const event = events.get(name);
                for (const callback of event) {
                    callback(...args);
                }
            }
        }
    };
}

module.exports = { ee };
