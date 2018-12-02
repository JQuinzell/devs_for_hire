import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import {
  Typography,
  createStyles,
  WithStyles,
  withStyles,
  Grid,
  List,
  ListSubheader,
  ListItemText
} from '@material-ui/core'

const query = gql`
  query findProject($id: String!) {
    findProject(id: $id) {
      title
      description
      manager {
        id
        name
        email
      }
      developers {
        id
        name
        email
      }
    }
  }
`

interface User {
  id: string
  name: string
  email: string
}

interface Project {
  id: string
  title: string
  description: string
  manager: User
  developers: User[]
}

interface Variables {
  id: string
}

interface Data {
  findProject: Project
}

class ProjectQuery extends Query<Data, Variables> {}

interface Match {
  id: string
}

const styles = createStyles({
  container: {},
  item: {
    padding: 5
  }
})

interface RouteProps extends RouteComponentProps<Match> {}
interface StyleProps extends WithStyles<typeof styles> {}

const Project: React.FunctionComponent<RouteProps & StyleProps> = ({
  match: {
    params: { id }
  },
  classes
}) => {
  return (
    <ProjectQuery query={query} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading || error) return null
        const project = data.findProject
        const manager = project.manager
        return (
          <Grid
            container
            direction="column"
            alignContent="center"
            className={classes.container}
            spacing={16}
          >
            <Grid item>
              <Typography variant="h3">{project.title}</Typography>
              <br />
              <Typography variant="h6">{project.description}</Typography>
            </Grid>
            <Grid item>
              <List>
                <ListSubheader>Project Manager</ListSubheader>
                <ListItemText
                  className={classes.item}
                  primary={manager.name}
                  secondary={manager.email}
                />
              </List>
              <ListSubheader>Developers</ListSubheader>
              {project.developers.map(dev => (
                <ListItemText
                  className={classes.item}
                  key={dev.id}
                  primary={dev.name}
                  secondary={dev.email}
                />
              ))}
            </Grid>
          </Grid>
        )
      }}
    </ProjectQuery>
  )
}

export default withStyles(styles)(Project)
