import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type LoginFormInputs = {
  username: string
  password: string
  rememberMe: boolean
}

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data) // Handle form submission logic here
    // After successful login, redirect to the home page
    navigate('/dashboard')
  }

  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={6}
        // display="flex"
        // justifyContent="flex-end"
        // alignItems="flex-start"
      >
        <div>eDHZ</div>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            fullWidth
            {...register('username', { required: true })}
            error={!!errors.username}
            helperText={errors.username ? 'Username is required' : ''}
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            {...register('password', { required: true })}
            error={!!errors.password}
            helperText={errors.password ? 'Password is required' : ''}
          />
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Button variant="text">Forgot Password?</Button>
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                {...register('rememberMe')}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
