import { NativeModules } from 'react-native';

type VaccinationtrackerType = {
  getVaccinationData(isForced: boolean): Promise<VaccinationData[]>;
};

const { Vaccinationtracker } = NativeModules;

export default Vaccinationtracker as VaccinationtrackerType;

export type VaccinationData = {
  total: number;
  lastUpdate: Date;
  singleDose: number;
  fullyVaccinatedPercentage: number;
  isoCode: string;
  secondDosePercentage: number;
  secondDose: number;
  fullyVaccinated: number;
  state: string;
  singleDosePercentage: number;
  firstDosePercentage: number;
  firstDose: number;
};
