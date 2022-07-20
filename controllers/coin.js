const axios = require('axios');

module.exports = {
  getdata: (req, res) => {
    let range = req.query.range;
    axios.get('https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?id=17893&range='+range, {
            headers: { 'X-CMC_PRO_API_KEY': "d10c33fc-468e-454c-9a3d-02748e180b89" }
        }).then(async (datacmc) => {
          res.status(200).json({
          message: `success`,
          res:datacmc.data,
          status: 200,
      })
  }).catch(err => {
      console.log("errorrrrrrrrrrrrrrrrrrrr")
      if (err.response) {
          // The client was given an error response (5xx, 4xx)
      } else if (err.request) {
          // The client never received a response, and the request was never left
      } else {
          // Anything else
          console.log('Error', err.message);
      }
      })
    },

    getcoba:(req, res) => {
      res.send("Hello percobaan")
    }

  };

