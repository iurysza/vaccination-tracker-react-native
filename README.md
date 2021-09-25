# react-native-vaccinationtracker

A React native wrapper for [vaccination-tracker](https://github.com/iurysza/vaccination-tracker)

## Installation

```sh
npm install react-native-vaccinationtracker
```

## Usage

```js
import Vaccinationtracker from "react-native-vaccinationtracker";

// ...

const result: VaccinationData[] = await Vaccinationtracker.getVaccinationData(true)

//type VaccinationData = {
//  total: number;
//  lastUpdate: Date;
//  singleDose: number;
//  fullyVaccinatedPercentage: number;
//  isoCode: string;
//  secondDosePercentage: number;
//  secondDose: number;
//  fullyVaccinated: number;
//  state: string;
//  singleDosePercentage: number;
//  firstDosePercentage: number;
//  firstDose: number;
//};
```

## Sample app

```sh
yarn example android
```

<img src="https://i.imgur.com/b9xv9Gy.png" height="790">


## Note: iOS Wrapper is still WIP

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
