class API {
  static baseUrl = "http://localhost:3000";
  static signInUrl = API.baseUrl + "/signin";
  static validateUrl = API.baseUrl + "/validate";
  static joinUrl = API.baseUrl + "/create";
  static likeAirportUrl = API.baseUrl + "/likeairports";
  static myAirportsUrl = API.baseUrl + "/myairports";

  static signin(user) {
    return fetch(this.signInUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static validate() {
    const token = localStorage.getItem("token");
    return fetch(this.validateUrl, {
      headers: { Authorization: token }
    }).then(resp => resp.json());
  }
  static join(user) {
    return fetch(this.joinUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
  }

  static likeAirport(airport) {
    return fetch(this.likeAirportUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(airport)
    }).then(resp => resp.json());
  }
  static myAirports() {
    return fetch(this.likeAirportUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => resp.json());
  }

  static getMyAirports() {
    return fetch(this.myAirportsUrl, {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(resp => resp.json());
  }
}

export default API;
