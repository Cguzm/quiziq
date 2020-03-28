const axios = require('axios');

export const getData = () => {
  return axios
    .get('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(result => {
      return result.data;
    });
};

// export const getData = async () => {
//   const response = await axios({
//     method: 'GET',
//     url: 'https://opentdb.com/api.php?amount=1&type=multiple'
//   });
// };
