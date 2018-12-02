import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Typography,
  Grid,
  List,
  ListSubheader,
  ListItemText
} from '@material-ui/core'
import { Link } from 'react-router-dom'

interface User {
  id: Number
  name: String
  email: String
  password: String
  isMentor: Boolean
  isPM: Boolean
  languages?: String[]
  gitUrl?: String
}

interface Project {
  id: string
  title: String
  manager: User
  developers: User[]
  available: Boolean
  dateMade: String
  description?: String
}

interface Props {
  user: User
  projects: Project[]
}

const GET_USER = gql`
  query user($id: String!) {
    findUser(id: $id) {
      name
      email
      isMentor
      languages
      gitUrl
      projects {
        id
        title
        description
      }
      managedProjects {
        title
        description
      }
    }
  }
`

const UserInfo = () => {
  return (
    <Query query={GET_USER} variables={{ id: 'jared' }}>
      {({ loading, error, data }) => {
        if (loading) return 'loading'
        if (error) return `Error ${error}`
        console.log(data)

        return (
          <Profile
            user={data.findUser}
            projects={data.findUser.projects || []}
          />
        )
      }}
    </Query>
  )
}

const Profile: React.FunctionComponent<Props> = ({ user, projects }) => {
  console.log(projects)
  return (
    <Grid container direction="column" alignContent="center">
      <Grid item>
        <Typography variant="h5">{user.name}</Typography>
      </Grid>
      <Grid item>
        <List>
          <ListSubheader>Projects</ListSubheader>
          {projects.map(pro => (
            <ListItemText key={pro.id}>
              <Link to={`/projects/${pro.id}`}>
                <Typography variant="h6">{pro.title}</Typography>
              </Link>
            </ListItemText>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}

export default UserInfo
