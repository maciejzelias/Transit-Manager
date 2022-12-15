import { driverDetailsList } from "./driverApiMockData";

const driversBaseUrl = "http://localhost:3000/api/drivers";

export const getDriversApiCall = () => {
  const promise = fetch(driversBaseUrl, {
    method: "GET",
  });
  return promise;
};

export const getDriverByIdCall = (driverId) => {
  const driver = driverDetailsList.find((driver) => driver._id === driverId);
  return driver;
};
