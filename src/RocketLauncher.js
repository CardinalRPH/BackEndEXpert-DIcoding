class RocketLauncher {
  constructor(repairKit, rockets = []) {
    this.repairKit = repairKit;
    this.rockets = rockets;
  }

  launchAllRockets() {
    this.rockets.forEach((rocket) => {
      // eslint-disable-next-line no-param-reassign
      rocket.engineStatus = 'active';
    });

    this.rockets = [];
  }

  launchRocketByQueue() {
    const rocket = this.rockets.shift();
    rocket.engineStatus = 'active';
  }

  async repairAllRockets() {
    let failedRepairCount = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const rocket of this.rockets) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await this.repairKit.repair(rocket);
      } catch {
        // eslint-disable-next-line no-plusplus
        failedRepairCount++;
      }
    }

    if (!failedRepairCount) {
      return 'all rocket repaired!';
    }

    return `there was ${failedRepairCount} of ${this.rockets.length} rocket fail to repair!`;
  }
}

module.exports = RocketLauncher;
