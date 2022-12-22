export function getTransitsApiCall() {
  return "http://localhost:3000/api/transits";
}

export function getTransitByIdApiCall(transitId) {
  return `http://localhost:3000/api/transits/${transitId}`;
}
