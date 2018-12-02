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
  query user($id: Int!) {
    findUser(id: $id) {
      name
      email
      isMentor
      languages
      gitUrl
      projects {
        title
        id
      }
    }
  }
`

const UserInfo = () => {
  return (
    <Query query={GET_USER} variables={{ id: 12 }}>
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
  return (
    <div>
      <span>{user.name}</span>
      <br />
      {projects.map(pro => {
        return <span>{pro.title}</span>
      })}
    </div>
  )
}

export default UserInfo
