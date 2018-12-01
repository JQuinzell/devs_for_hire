import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'

const appBarHeight = 64

const styles = createStyles({
    main: {
        height: `calc(100vh - ${appBarHeight}px)`,
        paddingTop: 100
    },
    appBar: {
        height: appBarHeight
    },
    giantButton: {
        width: 64 * 4,
        height: 24 * 3
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
            <Grid
                className={classes.main}
                container
                direction="column"
                alignItems="center"
                spacing={16}
            >
                <Grid item>
                    <Button
                        className={`${classes.giantButton}`}
                        variant="contained"
                        size="large"
                    >
                        Sign Up
                    </Button>
                </Grid>
                <Grid item>
                    <Typography variant="body1">or</Typography>
                </Grid>
                <Grid item>
                    <Button
                        className={`${classes.giantButton}`}
                        variant="contained"
                        size="large"
                    >
                        Sign In
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(Main)
