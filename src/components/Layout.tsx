import { Container } from '@mui/material'

type Props = {
  leftItem?: JSX.Element
  rightItem: JSX.Element
}

export const Layout = (props: Props) => {
  return (
    // <Grid container spacing={2} height={'100vh'}>
    //   <Grid width={'15%'} item>
    //     {props.leftItem}
    //   </Grid>
    //   <Grid
    //     item
    //     display="flex"
    //     justifyContent="center"
    //     alignItems="center"
    //     flexDirection={'column'}
    //     width={'85%'}
    //   >
    //     {props.rightItem}
    //   </Grid>
    // </Grid>
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      {props.leftItem}
      <Container sx={{ flexGrow: 1, padding: 3 }}>{props.rightItem}</Container>
    </Container>
  )
}
