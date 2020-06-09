const axios = require('axios').default;
const config = require("../config");


const storeData = (quizData) => {

    const apiEndpoint = config.awsAPIEndpoint + "?quizId=" + quizData.quizId;

    axios.post(apiEndpoint, { quizData })
       .then(res => {
         console.log(res);
         console.log(res.data);
       }).catch(err => {
         console.log(err.message);
         // We need to know about this error. Not being able to save data is something quite serious!
         // So - what do you want to do about it? Is it OK to log {quizData} in the log, or is that
         // an infosec issue?
         // Do you care about informing the user that their data was not saved?
         // What is your appetite for data loss? Are any failures acceptable? If so you could set up
         // a cloudwatch log filter and alert when the number of error messages exceeds a given threshold?

         // or if NO data loss is acceptable, you have to kick people off and restart the backend service somehow - but also
         // have some way of being notified of the failure.

    });
}

exports.storeData = storeData;
