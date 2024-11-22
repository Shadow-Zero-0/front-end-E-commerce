import { Box, Typography } from '@mui/material';


const Footer = () => {
    return (
        <Box sx={{
            bgcolor:"#2B3445",
            py:2,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderBottom:'1px solid #fff',
            borderTopLeftRadius:'10px',
            borderTopRightRadius:'10px'
        }}>
            <Typography sx={{
                fontSize:'18px'
            }} variant="h6" >Designed and developed by 
                    <span style={{
                        color:'#df3333'
                    }}> Omar Ahmed </span>
                @2024
            </Typography>
        </Box>
    );
}

export default Footer;
