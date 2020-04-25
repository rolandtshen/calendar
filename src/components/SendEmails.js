import React from 'react';
import emailjs from 'emailjs-com';

// var API_KEY = process.env.MAILGUN_API_KEY; 
// var DOMAIN = process.env.DOMAIN; 

var SERVICE_ID = 'default_service'; //'cs201_group_proj'; 
var TEMPLATE_ID = 'invitemember'; 
var USER_ID = 'user_VGneIDigKJxiIiIxj92z6'; 
emailjs.init("USER_ID");

function SendEmails(emails) {
    console.log(emails); 
    var templateParams = {
        eventName: 'gang gang',
        eventLink: 'Check this out!'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(function(){ 
       alert("Sent!");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });

}

export default SendEmails; 