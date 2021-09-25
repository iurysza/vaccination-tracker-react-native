import * as React from 'react';
import { Box, Heading, NativeBaseProvider } from 'native-base';

import Vaccinationtracker, {
  VaccinationData,
} from 'react-native-vaccinationtracker';
import StateList from './StateList';

export default function App() {
  const [vaccinationData, setVaccinationData] =
    React.useState<VaccinationData[]>();

  React.useEffect(() => {
    Vaccinationtracker.getVaccinationData(true).then((response) => {
      setVaccinationData(response);
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Box w={{ base: '100%', md: '25%' }}>
        <Heading fontSize="xl" textAlign="center" p="4" pb="3">
          Vacinômetro Brasil
        </Heading>
        {StateList(vaccinationData)}
      </Box>
    </NativeBaseProvider>
  );
}
