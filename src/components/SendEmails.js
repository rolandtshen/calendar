import React from 'react';
import emailjs from 'emailjs-com';

// var API_KEY = process.env.MAILGUN_API_KEY; 
// var DOMAIN = process.env.DOMAIN; 

var SERVICE_ID = 'default_service'; //'cs201_group_proj'; 
var TEMPLATE_ID = 'invitemember'; 
var USER_ID = 'user_VGneIDigKJxiIiIxj92z6'; 

function SendEmails(emails) {
    console.log(emails); 

    var templateParams = {
        eventName: 'gang gang',
        eventLink: 'Check this out!'
    };

    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

    emailjs.init("user_VGneIDigKJxiIiIxj92z6");

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function(){ 
       alert("Sent!");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });

    // const data = {
    //   from: 'FUCK <rapolu@usc.edu>',
    //   to: 'rapolu@usc.edu',
    //   subject: 'Hello',
    //   text: 'Testing some Mailgun awesomeness!'
    // };

    // mailgun.messages().send(data, (error, body) => {
    //   console.log(body);
    // });
}

export default SendEmails; 