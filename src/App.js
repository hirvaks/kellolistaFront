import './App.css';
import Watchlist from './Watchlist'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function App() {

  return (
    <div className="App">

      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            Watchlist
          </Typography>
        </Toolbar>
      </AppBar>

      <Watchlist />
    </div>
  )
}
