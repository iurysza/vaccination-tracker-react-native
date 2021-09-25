import React from 'react';
import type { VaccinationData } from 'react-native-vaccinationtracker';
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';

function getFlag(isoCode: string) {
  return `https://cdn.jsdelivr.net/gh/bgeneto/bandeiras-br/imagens/${isoCode.toUpperCase()}.png`;
}

function StateList(vaccinationData: VaccinationData[] | undefined) {
  return (
    <FlatList
      data={vaccinationData}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2"
        >
          <HStack space={3} justifyContent="space-between">
            <Avatar
              size="48px"
              source={{
                uri: getFlag(item.isoCode),
              }}
            />
            <VStack>
              <Text
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                bold
              >
                {item.state}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                1a dose: {item.firstDosePercentage}%
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
              >
                2a dose: {item.secondDosePercentage}%
              </Text>
            </VStack>
            <Spacer />
          </HStack>
        </Box>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

StateList.propTypes = {};
export default StateList;
