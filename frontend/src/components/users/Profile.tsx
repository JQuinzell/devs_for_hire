import * as React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

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
  id: Number
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
          <Profile user={data.findUser} projects={data.findUser.projects} />
        )
      }}
    </Query>
  )
}

const Profile: React.FunctionComponent<Props> = ({ user, projects }) => {
  console.log(projects)
  return (
    <div>
      <span>{user.name}</span>
      <br />
      {projects
        ? projects.map(pro => {
            return <span>{pro.title}</span>
          })
        : ''}
    </div>
  )
}

export default UserInfo
