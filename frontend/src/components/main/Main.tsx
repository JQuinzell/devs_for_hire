import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import SignIn from './SignIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const appBarHeight = 64

const styles = createStyles({
  main: {
    height: `calc(100vh - ${appBarHeight}px)`,
    paddingTop: 100
  },
  appBar: {
    height: appBarHeight
  }
})

interface Props extends WithStyles<typeof styles> {}

const Main: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6">Devs for hire</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <Router>
          <Switch>
            <Route path="/" component={SignIn} />
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(Main)
