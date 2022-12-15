import React from "react";
import { Link } from "react-router-dom";

import { getDriversApiCall } from "../../apiCalls/driverApiCalls";

class DriverList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      drivers: [],
    };
  }

  fetchDriverList = () => {
    getDriversApiCall()
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            drivers: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            erorr: error,
          });
        }
      );
  };
}

export default DriverList;
