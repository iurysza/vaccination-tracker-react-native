import { NativeModules } from 'react-native';

type VaccinationtrackerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Vaccinationtracker } = NativeModules;

export default Vaccinationtracker as VaccinationtrackerType;
