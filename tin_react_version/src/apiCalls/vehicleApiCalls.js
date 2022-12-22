export function getVehiclesApiCall() {
  return "http://localhost:3000/api/vehicles";
}

export function getVehicleByIdApiCall(vehicleId) {
  return `http://localhost:3000/api/vehicles/${vehicleId}`;
}
