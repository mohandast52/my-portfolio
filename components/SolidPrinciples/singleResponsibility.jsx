const messageLogger = message => console.log(message);

class Tracker {
  constructor(maxCalories) {
    this.currentCalories = 0;
    this.maxCalories = maxCalories;
  }

  trackCalories = count => {
    this.currentCalories += count;
    if (this.currentCalories > this.maxCalories) {
      /* this.logMessage(); // example of what we should not do */
      messageLogger('Exceeded from external function!');
    }
  };

  /**
   * Here, we are defeating the purpose. If we want to change the implemention of logMessage,
   * we are basically touching the whole file, instead it should be a external function passing the
   * message.
   */
  logMessage = () => {
    console.log('Exceeded');
  }
}

export default Tracker;
