import React from 'react';
import './film-details.scss';
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class FilmDetails extends React.Component {
    constructor(props) {
        
        super(props);
       
        if(typeof (props.location.prop) === 'undefined'){
            this.props.history.push('/')
        }
        this.state = {
            film:this.props.location.prop['film']
        };
    }
    componentDidMount() {
        
    }
    render() {
        const film = this.state.film
        return (
            <div className="content-search">
                <h1>{film.name}</h1>
                <div className="book">
                    <div className="book-pic">
                        <img src={film.image.medium} alt={film.name} />
                        {
                            film.rating?
                            <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography className='subtitle' component="legend">Evaluation :</Typography>
                            <Rating name="customized-10" value={film.rating.average} max={10} readOnly  />
                            </Box>
                            :''
                        }
                        
                    </div>
                    <div className="book-details">
                    <p><span className="subtitle" >Date de sortie : </span> <span>{film.premiered? film.premiered :'Non précisé'} </span></p>
                    <p> 
                        <span className="subtitle" >genres : </span>
                        {film.genre?
                            film.genres.map(g=>(
                            <span> { g } </span> 
                            ))
                            :
                            'Non précisé'
                        } 
                    </p>
                    <p><span className="subtitle" >Nationalité  :  </span> <span>{film.network? film.network.country.name : 'Non précisé' } </span></p>
                    <p><span className="subtitle" >Langue  : </span> <span>{film.language? film.language : 'Non précisé'} </span></p>
                    <p><span className="subtitle" >Description  : </span><span dangerouslySetInnerHTML={{__html: film.summary? film.summary : 'Non précisé'}}></span></p>     
                    </div>
                </div>
            </div>

        );
    }
}
export default withRouter(FilmDetails);