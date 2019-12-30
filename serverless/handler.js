const AWS = require("aws-sdk");

module.exports.sendEmail = function(event, context, callback) {
  AWS.config.update({ region: "us-east-1" });

  const formInfo = JSON.parse(event);

  const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <p>
          <strong>Name:</strong> </br>
          ${formInfo.name}
        </p>
        <p>
          <strong>Email:</strong> </br>
          ${formInfo.email}
        </p>
        <p>
          <strong>Date:</strong> </br>
          ${formInfo.date}
        </p>
        <p>
          <strong>Message:</strong> </br>
          ${formInfo.message}
        </p>
      </body>
    </html>
  `;

  const textBody = `
    ${formInfo.name}
  `;

  // Create sendEmail params
  const params = {
    Destination: {
      ToAddresses: ['lspraue@gmail.com']
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Contact form submission for laurasprauer.com"
      }
    },
    Source: "<lspraue@gmail.com>"
  };

  // Create the promise and SES service object
  const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
    .sendEmail(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  sendPromise
    .then(data => {

      const response = {
        statusCode: 200,
        contentType: 'text/plain',
        dataType: 'application/json',
        headers: {
          "Access-Control-Allow-Origin" : "*, http://localhost:3000", // Required for CORS support to work
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          name: formInfo.name,
          email: formInfo.email,
          date: formInfo.date,
          message: formInfo.message
        }),
      };

      callback(null, response);
    })
    .catch(err => {
      const response = {
        statusCode: 400,
        contentType: 'application/json',
        dataType: 'json',
        headers: {
          "Access-Control-Allow-Origin" : "*, http://localhost:3000", // Required for CORS support to work
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
          error: true
        }),
      };

      callback(null, response);
    });
};
