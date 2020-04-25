import React, {useCallback} from 'react';
import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function Help() {
/*    const onClick = useCallback(){

        <div className="login">
            ASKDFJAD
        </div>
    );*/

    const onSubmitHandler = {
        // direct guest to check their email for further instructions
        // button for back to login page
        // https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page/50645395
        // import { useHistory } from 'react-router-dom';
        // const App = () => {
        //    const history = useHistory()
        //    <i className="icon list arrow left"
        //       onClick={() => {
        //         history.goBack()
        //    }}></i>
        // }
    }

    return (
        <Container>
            <div className="login">
                <div className="login-header">
                    GCal Sync
                </div>

                <div className="login-input-label">
                    <label htmlFor="email">Email &nbsp;</label>
                </div>

                <div className="login-input">
                    <input className="login-info" required={true} id="email"/>
                </div>

                <div className="login-buttons">
                    <Button /*onClick={onClick}*/ size="lg" variant="primary">Submit</Button>{' '}
                    <br/>
                </div>
                <div className="back-to-login">
                    <Button onClick={event =>  window.location.href='/login'}size="sm" variant="secondary">&lt; Back to login</Button>{' '}
                </div>
            </div>
        </Container>

    );
}
