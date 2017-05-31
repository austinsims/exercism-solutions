const SECONDS_IN_EARTH_YEAR = 31557600;

class SpageAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onPlanet(fractionOfEarthPeriod) {
    const age = this.seconds / (fractionOfEarthPeriod * SECONDS_IN_EARTH_YEAR);
    return parseFloat(age.toFixed(2));
  }

  onEarth() {
    return this.onPlanet(1);
  }

  onMercury() {
    return this.onPlanet(0.2408467);
  }

  onVenus() {
    return this.onPlanet(0.61519726 );
  }

  onMars() {
    return this.onPlanet(1.8808158 );
  }

  onJupiter() {
    return this.onPlanet(11.862615);
  }

  onSaturn() {
    return this.onPlanet(29.447498);
  }

  onUranus() {
    return this.onPlanet(84.016846);
  }

  onNeptune() {
    return this.onPlanet(164.79132);
  }
}

export default SpageAge;