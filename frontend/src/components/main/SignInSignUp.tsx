import * as React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = createStyles({
  container: {
    height: '100%'
  },
  giantButton: {
    width: 64 * 4,
    height: 24 * 3
  }
})

interface Props extends WithStyles<typeof styles> {}

const SignInSignUp: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      alignItems="center"
      spacing={16}
    >
      <Grid item>
        <Link to="signup">
          <Button
            className={`${classes.giantButton}`}
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="body1">or</Typography>
      </Grid>
      <Grid item>
        <Link to="signin">
          <Button
            className={`${classes.giantButton}`}
            variant="contained"
            size="large"
          >
            Sign In
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SignInSignUp)
