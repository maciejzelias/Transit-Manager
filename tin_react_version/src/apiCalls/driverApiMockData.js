export const driverList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "birthdayYear": 1998,
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "birthdayYear": 2002,
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "birthdayYear": 1765,
    }
]

export const driverDetailsList = [
    {
        "_id": 1,
        "firstName": "Jan",
        "lastName": "Kowalski",
        "birthdayYear": 1998,
        "employments": [
            {
                "_id": 1,
                "salary": "5000.00",
                "dateFrom": "2001-01-01T00:00:00.000Z",
                "dateTo": "2009-01-01T00:00:00.000Z",
                "emp_id": 1,
                "dept_id": 1,
                "department": {
                    "_id": 1,
                    "name": "HR",
                    "budget": "500000.00",
                }
            },
            {
                "_id": 3,
                "salary": "3000.00",
                "dateFrom": "2009-01-02T00:00:00.000Z",
                "dateTo": null,
                "emp_id": 1,
                "dept_id": 2,
                "department": {
                    "_id": 2,
                    "name": "Sales",
                    "budget": "2000000.00",
                }
            }
        ]
    },
    {
        "_id": 2,
        "firstName": "Adam",
        "lastName": "Zieliński",
        "birthdayYear": 2002,
        "employments": [
            {
                "_id": 2,
                "salary": "4000.00",
                "dateFrom": "2001-02-01T00:00:00.000Z",
                "dateTo": "2009-02-01T00:00:00.000Z",
                "emp_id": 2,
                "dept_id": 1,
                "department": {
                    "_id": 1,
                    "name": "HR",
                    "budget": "500000.00",
                }
            }
        ]
    },
    {
        "_id": 3,
        "firstName": "Marian",
        "lastName": "Nowak",
        "birthdayYear": 1765,
        "employments": []
    }
]