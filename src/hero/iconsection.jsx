import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
const Iconsection = () => {
    const theme = useTheme()
    return (
        <Container sx={{
            pb:2,
        }}>
          <Stack
          divider={useMediaQuery('(min-width:400px)')?<Divider orientation="vertical" flexItem />: null}
          sx={{
            mt:2,
          
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            bgcolor: theme.palette.mode === 'dark'? '#000':'#fff'
          }}>
          <Mybox icon={<OfflineBoltIcon fontSize="large"/>}title='Fast Delivery
'babytitle='Start from $10'/>
            <Mybox icon={<WorkspacePremiumIcon fontSize="large"/>}title='Money Guarantee'babytitle='7 Days Back'/>
            <Mybox icon={<AccessAlarmsIcon fontSize="large"/>}title='365 Days'babytitle='For free return'/>
            <Mybox icon={<CreditScoreIcon fontSize="large"/>}title='Payment'babytitle='Secure system'/>
          </Stack>
      </Container>
    );
}

export default Iconsection;


const Mybox = ({icon ,title,babytitle}) => {
    const theme = useTheme()
    return(
        <Box sx={{

        display:'flex',alignItems:'center',flexGrow:1,py:2,gap:2,width:'300',justifyContent:'center'
        }}>
                 {icon}
            <Box>
            <Typography variant="body1" >{title}</Typography>
            <Typography variant="body1" sx={{
                color:theme.palette.text.secondary
            }}>{babytitle}</Typography>
            </Box>
        </Box>
   
      
    )
}