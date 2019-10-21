import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon  from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import FilmCard from './film-card';
import Container from '@material-ui/core/Container';
import './film-search.scss'
import GridList from '@material-ui/core/GridList';
import ListSubheader from '@material-ui/core/ListSubheader';

class FilmSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          searchInputFilm:'',
          filmList:[],
          showFilmList:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.seachAction = this.seachAction.bind(this);
      }
      handleChange(event) {
        const filmInputValue=event.target.value
        this.setState({searchInputFilm: filmInputValue});
      }
      seachAction(){
        
        axios.get('https://api.tvmaze.com/search/shows?q='+this.state.searchInputFilm)
          .then(res => {
            const filmListApi = res.data;
            this.setState({
               filmList:filmListApi,
               showFilmList:true
              });
          })
      }
    render() {
        const {searchInputFilm,showFilmList,filmList}=this.state
        return (
            <div className="content-search">
              <div className="search-film">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <TextField id="input-with-icon-grid" value={searchInputFilm} onChange={this.handleChange} label="Film Name" />
                  </Grid>
                  <Grid item>
                  <IconButton className='icon-button' aria-label="search" onClick={this.seachAction} >
                    <SearchIcon />
                  </IconButton>
                  </Grid>
                </Grid>
              </div>
            {
              showFilmList ?
                <GridList  className='gridList'>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader className='subtitle-film-header' component="div">Liste des films</ListSubheader>
                </GridListTile>
                {filmList.map(film => (
                  <FilmCard key={film.show.id}
                  film={film} 
                  />
              ))}
              </GridList>
              :
              <h2>No Films </h2>
            }
          </div>
        );
    }
}
export default FilmSearch;