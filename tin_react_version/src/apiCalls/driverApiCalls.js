
export const getDriversApiUrl = () => {
  return "http://localhost:3000/api/drivers";
};

export const getDriverByIdCall = (driverId) => {
  return `http://localhost:3000/api/drivers/${driverId}`;
};
