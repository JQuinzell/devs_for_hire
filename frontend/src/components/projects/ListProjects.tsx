import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {
  Typography,
  CardActions,
  Button,
  Grid,
  createStyles,
  WithStyles,
  withStyles
} from '@material-ui/core'

const query = gql`
  query projects {
    projects {
      id
      title
      manager {
        name
      }
      developers {
        id
        name
      }
      available
      description
    }
  }
`

interface Project {
  id: string
  title: string
  available: boolean
  description: string
  manager: {
    name: string
  }
  developers: Array<{
    id: string
    name: string
  }>
}

interface Data {
  projects: Project[]
}

class QueryProjects extends Query<Data, {}> {}

const styles = createStyles({
  container: {
    padding: '0 20px'
  },
  card: {
    padding: 25
  }
})

interface Props extends WithStyles<typeof styles> {}

const ListProjects: React.FunctionComponent<Props> = ({ classes }) => {
  return (
    <QueryProjects query={query}>
      {({ loading, error, data }) => {
        if (loading || error) return null
        return (
          <Grid className={classes.container} container spacing={16}>
            {data.projects.map(project => (
              <Grid key={project.id} item>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
                    <Typography variant="h6">Manager:</Typography>
                    <Typography variant="body2">
                      {project.manager.name}
                    </Typography>
                    <Typography variant="h6">Developers</Typography>
                    {project.developers.map(dev => (
                      <Typography key={dev.id} variant="body2">
                        {dev.name}
                      </Typography>
                    ))}
                    <Typography variant="body1">
                      status:{' '}
                      {project.available ? 'Needs devs!' : 'In Progress!'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {project.available ? (
                      <Button size="small">Join!</Button>
                    ) : null}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      }}
    </QueryProjects>
  )
}

export default withStyles(styles)(ListProjects)
