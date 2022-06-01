import './App.css';
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
