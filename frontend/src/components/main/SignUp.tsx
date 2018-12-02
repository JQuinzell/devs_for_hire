import * as React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router-dom'
import client from 'client'

const mutation = gql`
  mutation createAccount($user: UserInput!) {
    createAccount(user: $user) {
      name
      email
      password
      isProjectManager
      isDeveloper
      isMentor
    }
  }
`
interface UserInput {
  name: string
  email: string
  password: string
  isProjectManager: boolean
  isDeveloper: boolean
  isMentor: boolean
}

interface Data {
  user: UserInput
}

class SignUpMutation extends Mutation<Data, Data> {}

const { useState } = React

interface Props extends RouteComponentProps {}

const SignUp: React.FunctionComponent<Props> = ({ history }) => {
  const [name, setName] = useState('')
  const [isDeveloper, setIsDeveloper] = useState(false)
  const [isMentor, setIsMentor] = useState(false)
  const [isProjectManager, setisProjectManager] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SignUpMutation mutation={mutation}>
      {createAccount => (
        <form
          onSubmit={e => {
            e.preventDefault()
            createAccount({
              variables: {
                user: {
                  name,
                  isDeveloper,
                  isMentor,
                  isProjectManager,
                  email,
                  password
                }
              }
            }).then(() => {
              client.writeData({ data: { currentUser: name } })
              history.push('/projects')
            })
          }}
        >
          <Grid container direction="column" alignContent="center" spacing={16}>
            <Grid item>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isDeveloper}
                      onChange={() => setIsDeveloper(!isDeveloper)}
                    />
                  }
                  label="Developer?"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isProjectManager}
                      onChange={() => setisProjectManager(!isProjectManager)}
                    />
                  }
                  label="Project Manager?"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isMentor}
                      onChange={() => setIsMentor(!isMentor)}
                    />
                  }
                  label="Mentor?"
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                label="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                label="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </SignUpMutation>
  )
}

export default SignUp
