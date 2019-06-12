class API {
  static baseUrl = "http://localhost:3000";
  static signInUrl = API.baseUrl + "/signin";
  static validateUrl = API.baseUrl + "/validate";

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

  //   static getInventory() {
  //     return fetch("http://localhost:3000/inventory", {
  //       headers: { Authorization: localStorage.getItem("token") }
  //     }).then(resp => resp.json());
  //   }
}

export default API;
