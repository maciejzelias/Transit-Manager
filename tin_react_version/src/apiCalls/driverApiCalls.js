
export const getDriversApiCall = () => {
  return "http://localhost:3000/api/drivers";
};

export const getDriverByIdApiCall = (driverId) => {
  return `http://localhost:3000/api/drivers/${driverId}`;
};
