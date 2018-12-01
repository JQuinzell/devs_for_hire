import * as React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

interface FormValues {
  isDeveloper: boolean
  isProjectManajer: boolean
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

interface Props {}

const { useState } = React

const SignUp: React.FunctionComponent<Props> = ({}) => {
  const [isDeveloper, setIsDeveloper] = useState(false)
  const [isProjectManager, setisProjectManager] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignUp
