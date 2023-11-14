class DataService {
  constructor() {}
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        callback(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  postData(url, data) {
    console.log(data);
    axios
      .post(url, data)
      .then((response) => {
        console.log("RESP", response);
        location.reload();
      })
      .catch((error) => {
        console.log('hiba', error);
      })
  }
}

export default DataService;
