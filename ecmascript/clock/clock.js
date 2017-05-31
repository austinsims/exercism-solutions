function pad(number) {
  const string = String(number);
  return Array(2 - string.length).fill('0').join('') + string;
}

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;

class Time {
  constructor(t) {
    this.t = t < 0 ?
        t % MINUTES_IN_DAY + MINUTES_IN_DAY  :
        t % MINUTES_IN_DAY;
  }

  plus(t) {
    return new Time(this.t + t);
  }

  minus(t) {
    return new Time(this.t - t);
  }

  equals(that) {
    return this.t === that.t;
  }

  toString() {
    const hour = Math.floor(this.t / MINUTES_IN_HOUR);
    const minute = this.t % MINUTES_IN_HOUR;
    return `${pad(hour)}:${pad(minute)}`;
  }
}

function at(hour = 0, minute = 0) {
  return new Time(hour * MINUTES_IN_HOUR + minute);
}

export default at;
