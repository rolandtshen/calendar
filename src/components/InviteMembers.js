import React from 'react';

class InviteMembers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'rapolu@usc.edu'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    sendEmails() {
        var email = "rapolu@usc.edu"; 
        var API_KEY = 'b4eda4fb0876e379d4960fe4856ba750-f135b0f1-c623ef87';
        var DOMAIN = 'sandboxe9375a3c80a343e9987d24a6264b74f7.mailgun.org   ';
        var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

        const data = {
          from: 'FUCK <rapolu@usc.edu>',
          to: 'rapolu@usc.edu',
          subject: 'Hello',
          text: 'Testing some Mailgun awesomeness!'
        };

        mailgun.messages().send(data, (error, body) => {
          console.log(body);
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        return (
            <div>
                <h2>Invite Members</h2>
                
                <div>
                    <textarea value={this.state.email} onChange={this.handleChange} />
                    <button onClick={this.sendEmails}>
                        Send email invites
                    </button>
                </div>
            </div>
        );
    }
}

export default InviteMembers;