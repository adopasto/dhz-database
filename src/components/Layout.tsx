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
    // TODO Layout is not properly working - on smaller screen drawer is overlaying right content
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection:"row" }}>
      {props.leftItem}
      <Container sx={{ flexGrow: 1, padding: 3 }}>{props.rightItem}</Container>
    </Container>
  )
}
