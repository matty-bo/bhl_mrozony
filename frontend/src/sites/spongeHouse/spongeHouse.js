import { Box, Switch, Typography } from "@mui/material"
import { useState } from "react";
import { DoughnutChart } from "../../components/donutChart/doughnutChart";

const ActiveStatus = () => <span style={{ color: '#28a745', textTransform: 'uppercase' }}>aktywny</span>
const InactiveStatus = () => <span style={{ color: '#dc3545', textTransform: 'uppercase' }}>nieaktywny</span>

export const SpongeHouse = () => {
  const [spongeHouseStatus, setSpongeHouseStatus] = useState(true);
  const waterGiven = 420;

  const handleSwitch = (event) => {
    setSpongeHouseStatus(!spongeHouseStatus);
  }

  return (<Box sx={{display: 'flex'}}>
    <Box sx={{
      borderRadius: '8px',
      boxShadow: (theme) => `0 0 5px ${theme.greyColor}`,
      backgroundColor: (theme) => `${theme.lightGreyColor}`,
      minHeight: '120px',
      margin: '15px',
      padding: '15px',
      width: '100%'
    }}>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '50%' }}>
          <DoughnutChart></DoughnutChart>
        </Box>
        <Box sx={{ width: '50%', padding: '0 15px' }}>
          <Box sx={{ marginBottom: '15px', borderBottom: 'solid 1px' }}>
            <Typography sx={{ fontWeight: 'bolder' }}>
              Czym jest sponge city?
            </Typography>
            <Typography sx={{ fontSize: '.9em' }}>
              Sponge city jest to koncept mający na celu stworzenie lepszego systemu zarządzania miejskimi zasobami wodnymi. Opiera się on na zintegrowanym systemie irygacyjnym, w którym rozbudowany miejskich zbiorników i kanałów wspierany jest przez rozproszone jednostki z sektora prywatnego. Pozwala to na zachowywanie wody w obszarach, z których przy klasycznej infrastrukturze woda byłaby szybko drenowana do najbliższego ujścia.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>
              Status twojego sponge house: {spongeHouseStatus === true ? <ActiveStatus/> : <InactiveStatus/>}
            </Typography>
            <Switch checked={spongeHouseStatus} onChange={handleSwitch}></Switch>
          </Box>

          <Typography>
            Ilość przekazanej wody [m³]: <span style={{ fontWeight: 'bolder' }}>{waterGiven}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>);
}