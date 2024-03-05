import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
import { krajIds, krajOkresMap, okresMestoMap } from './components/mockedData'

const DashboardPage = () => {
  // TODO: adjust wrapper to be styled Container or use only Container component
  // nechal som to tak nech vidis rozdiel ze takto sa da spravit vlastny styled component a pouzivat ho

  // TODO mapa svk s vyberom stanice
  // - filtrovat podla vybrateho kraja, okresu -> mesta/dediny / ->BE ? FE? logic
  // ako zorbazit dashboard ? -> mapa - po klik na otvorit button -> zobrazi info pod ? alebo otvori modal ?
  // button disabled dokial nebude vybraty konkretny zbor

  //check leaflet map
  const [selectedKraj, setSelectedKraj] = useState<string>('')
  const [selectedOkres, setSelectedOkres] = useState<string>('')
  const [selectedMesto, setSelectedMesto] = useState<string>('')

  const handleKrajChange = (event: SelectChangeEvent<string>) => {
    const krajId = event.target.value
    setSelectedKraj(krajId)
    setSelectedOkres('') // Reset selected okres and mesto when kraj changes
    setSelectedMesto('')
  }

  const handleOkresChange = (event: SelectChangeEvent<string>) => {
    setSelectedOkres(event.target.value)
    setSelectedMesto('') // Reset selected mesto when okres changes
  }

  const handleMestoChange = (event: SelectChangeEvent<string>) => {
    setSelectedMesto(event.target.value)
  }

  return (
    //  TODO: Step2: implement selecting undefined -> will reset the selections and map gets back to default state
    //          2.1: interactive selection on the map will fill the pickers
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      {/* <LeafletMap /> */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="kraj-select">Vyberte Kraj</InputLabel>
          <Select
            value={selectedKraj}
            onChange={handleKrajChange}
            displayEmpty
            label="Vyberte Kraj"
            inputProps={{
              name: 'kraj',
              id: 'kraj-select',
            }}
            sx={{ minWidth: '200px' }}
          >
            {krajIds.map((krajId) => (
              <MenuItem key={krajId} value={krajId}>
                {krajId}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="okres-select">Vyberte Okres</InputLabel>
          <Select
            value={selectedOkres}
            onChange={handleOkresChange}
            disabled={!selectedKraj}
            displayEmpty
            label="Vyberte Okres"
            inputProps={{
              name: 'okres',
              id: 'okres-select',
            }}
            sx={{ minWidth: '200px' }}
          >
            {selectedKraj &&
              krajOkresMap[selectedKraj]?.okresy.map((okres) => (
                <MenuItem key={okres} value={okres}>
                  {okres}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="mesto-select">Vyberte Obec/Mesto</InputLabel>
          <Select
            value={selectedMesto}
            disabled={!selectedOkres}
            onChange={handleMestoChange}
            label="Vyberte Obec/Mesto"
            displayEmpty
            inputProps={{
              name: 'mesto',
              id: 'mesto-select',
            }}
            sx={{ minWidth: '200px' }}
          >
            {selectedOkres &&
              okresMestoMap[selectedOkres]?.mesta.map((mesto) => (
                <MenuItem key={mesto} value={mesto}>
                  {mesto}
                </MenuItem>
              ))}
      
          </Select>
        </FormControl>
      </div>
    </Container>
  )
}

export default DashboardPage
