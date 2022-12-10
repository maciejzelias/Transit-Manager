import { transitDetailsList, transitList } from "./transitApiMockData";

export function getTransitsApiCall() {
  return transitList;
}

export function getTransitByIdApiCall(transitId) {
  const transit = transitDetailsList.find(
    (transit) => transit._id === transitId
  );
  return transit;
}
