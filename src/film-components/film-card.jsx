import React from 'react';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import './film-card.scss';
import {Link} from "react-router-dom";   
class FilmCard extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const film = this.props.film.show
        return (
            <div className="film-card">
                <GridListTile key={film.id}>
                    <img src={film.image.medium} alt={film.name} />
                    <GridListTileBar
                        title={film.name}
                        subtitle={<span>Language: {film.language}</span>}
                        actionIcon={
                            <Link to={
                                { 
                                    pathname: '/filmDetails',
                                    prop : {film}
                                }
                            }>
                            <IconButton aria-label={`info about ${film.name}`} className='icon-film'>
                                <InfoIcon />
                            </IconButton>
                            </Link>
                        }
                    />
                </GridListTile>
            </div>
        );
    }
}
export default FilmCard;