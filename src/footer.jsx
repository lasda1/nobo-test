import React from 'react';
import Container from '@material-ui/core/Container';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
            <Container fixed className="footer-content" >
            < img className = "logo-footer"
            alt = "logo brand nobo blanc"
            src = {require('./images/nobo-logo-white.svg')} /> 
            <p>Test Technique Nobo</p>
            </Container> 
          </div>
          
        );
    }
}
export default Footer;