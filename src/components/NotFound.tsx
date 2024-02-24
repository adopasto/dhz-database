import { Container, Paper, Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h3" color="textSecondary">
          404 - Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary">
          The page you are looking for might not exist or has been moved.
        </Typography>
      </Paper>
    </Container>
  )
}

export default NotFound
