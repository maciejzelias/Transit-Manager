export const driverList = [
  {
    _id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    birthdayYear: 1998,
  },
  {
    _id: 2,
    firstName: "Adam",
    lastName: "Zieliński",
    birthdayYear: 2002,
  },
  {
    _id: 3,
    firstName: "Marian",
    lastName: "Nowak",
    birthdayYear: 1765,
  },
];

export const driverDetailsList = [
  {
    _id: 1,
    firstName: "Jan",
    lastName: "Kowalski",
    birthdayYear: 1998,
    transits: [
      {
        _id: 1,
        startingLocalization: "Budapeszt",
        endingLocalization: "Warszawa",
        dateFrom: "2001-01-01T00:00:00.000Z",
        dateTo: "2009-01-01T00:00:00.000Z",
        driver_id: 1,
        vehicle_id: 1,
        vehicle: {
          _id: 1,
          brandName: "Mercedes",
          productionYear: "1999",
        },
      },
      {
        _id: 3,
        salary: "3000.00",
        dateFrom: "2009-01-02T00:00:00.000Z",
        dateTo: null,
        emp_id: 1,
        dept_id: 2,
        vehicle: {
          _id: 2,
          brandName: "Mercedes",
          productionYear: 2005,
        },
      },
    ],
  },
  {
    _id: 2,
    firstName: "Adam",
    lastName: "Zieliński",
    birthdayYear: 2002,
    transits: [
      {
        _id: 2,
        startingLocalization: "Barcelona",
        endingLocalization: "Warszawa",
        dateFrom: "2001-02-01T00:00:00.000Z",
        dateTo: "2009-02-01T00:00:00.000Z",
        driver_id: 2,
        vehicle_id: 1,
        vehicle: {
          _id: 1,
          brandName: "Scania",
          productionYear: 2000,
        },
      },
    ],
  },
  {
    _id: 3,
    firstName: "Marian",
    lastName: "Nowak",
    birthdayYear: 1765,
    employments: [],
  },
];
