import Grid from '@mui/material/Grid'

type Props = {
  leftItem?: JSX.Element
  rightItem: JSX.Element
}

export const Layout = (props: Props) => {
  return (
    <Grid container spacing={2} height={'100vh'}>
      <Grid width={'15%'} item>
        {props.leftItem}
      </Grid>
      <Grid
        item
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={'column'}
        width={'85%'}
      >
        {props.rightItem}
      </Grid>
    </Grid>
  )
}
