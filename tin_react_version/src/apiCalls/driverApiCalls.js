import { driverList, driverDetailsList } from "./driverApiMockData";

export const getDriversApiCall = () => {
  return driverList;
};

export const getDriverByIdCall = (driverId) => {
  const driver = driverDetailsList.find((driver) => driver._id === driverId);
  return driver;
};
