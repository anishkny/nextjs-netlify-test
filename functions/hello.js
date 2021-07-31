const generateRandomNumber = require('./util/generateRandomNumber');

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        event,
        context,
        env: process.env,
        random: generateRandomNumber(),
      },
      null,
      2
    ),
  };
};
