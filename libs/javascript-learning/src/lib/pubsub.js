export const events = {
  eventList: {},
  on(eventName, callback) {
    this.eventList[eventName] = this.eventList[eventName] || [];
    this.eventList[eventName].push(callback);
  },
  off(eventName, callback) {
    if (this.eventList[eventName]) {
      for (let i = 0; i < this.eventList[eventName].length; i += 1) {
        if (this.eventList[eventName][i] === callback) {
          this.eventList[eventName].splice(i, 1);
          break;
        }
      }
    }
  },
  emit(eventName, payload) {
    if (this.eventList[eventName]) {
      this.eventName[eventName].forEach(fn => {
        fn(payload);
      });
    }
  },
};

export const ABC = null;
