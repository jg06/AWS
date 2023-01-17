import axios from "axios";

// function makeParmas(value) {
//   try {
//     return {
//       params: JSON.parse(value),
//     };
//   } catch {
//     return {};
//   }
// }

function makeValues(option, value) {
  try {
    if (option === "GET" || option === "DELETE") {
      return {
        params: JSON.parse(value),
      };
    }
    return {
      data: JSON.parse(value),
    };
  } catch {
    return {};
  }
}

// function sendGet(url, value) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, makeParmas(value))
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// }

// function get(url = "https://google.com", value) {
//   return new Promise((resolve, reject) => {
//     // axios
//     //   .get(url, {
//     //     userId: 1,
//     //   })
//     //   .then((res) => resolve(res))
//     //   .catch((err) => reject(err));

//     axios({
//       url: "https://google.com",
//       method: "GET",
//       parmas: JSON.stringify({ userId: 1 }),
//     })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));

//     fetch("http://google.com?userId=1")
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// }

// function post(url, value) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, {
//         userId: 1,
//       })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));

//     axios({
//       url: "http://google.com",
//       method: "POST",
//       body: {
//         userId: 1,
//       },
//     });

//     fetch("http://google.com", {
//       method: "POST",
//       body: JSON.stringify({
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//   });
// }

// function put(url, value) {
//   return new Promise((resolve, reject) => {
//     axios
//       .put(url, {
//         userId: 1,
//       })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));

//     axios({
//       url: "http://google.com",
//       method: "PUT",
//       body: {
//         userId: 1,
//       },
//     });

//     fetch("http://google.com", {
//       method: "PUT",
//       body: JSON.stringify({
//         userId: 1,
//       }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//   });
// }

// function delete (url, value) {
//     axios
//       .delete(url, {
//         userId: 1,
//       })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));

//     axios({
//       url: "https://google.com",
//       method: "DELETE",
//       parmas: JSON.stringify({ userId: 1 }),
//     })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));

//   fetch("http://google.com?userId=1", {
//       method: "DELETE"
//     })
//       .then((res) => resolve(res))
//       .catch((err) => reject(err));
//   });
// }

function sendHttp(option, url, value) {
  return new Promise((resolve, reject) => {
    const config = {
      method: option,
      url,
      ...makeValues(option, value),
    };
    axios(config)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export default sendHttp;
