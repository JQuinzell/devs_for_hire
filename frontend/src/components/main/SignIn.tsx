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

const { useState } = React
const query = gql`
  query loginQuery($email: String!) {
    login(email: $email) {
      id
    }
  }
`
const SignIn: React.FunctionComponent<any> = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        client
          .query<any>({
            query: query,
            variables: { email }
          })
          .then(res => {
            client.writeData({ data: { currentUser: res.data.login.id } })
            history.push('/account')
          })
      }}
    >
      <Grid container direction="column" alignContent="center">
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
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignIn
