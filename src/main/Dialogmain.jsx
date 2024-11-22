import { AddShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Dialogmain = ({ product }) => {


  const [z, setz] = useState(0);
  const [alignment, setAlignment] = useState(z);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Stack
      sx={{
        textAlign: { xs: "center", md: "left" },
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
      gap={1}
    >
      <Box>
        <img width={300} src={product.linkimage[z]} alt="" />
      </Box>
      <Box>
        <Box>
          <Typography variant="h5">{product.name}</Typography>

          <Typography
            sx={{
              my: 1,
            }}
            variant="body1"
            color="crimson"
          >
            ${product.pris}
          </Typography>

          <Typography
            sx={{
              my: 1,
            }}
            variant="body1"
          >
          {product.dis}
          </Typography>


          <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      sx={{
        '.Mui-selected':{
        border:'1px royalblue !important',
        borderRadius:'5px !important',
        opacity:'1',
        backgroundColor:'initial'
       }
       }}
    
    >  
             { product.linkimage.map((item,index) => {
              return(
                <ToggleButton   sx={{
                  width:'110px',
                  height:'110px',
                  mx:1,
                  p:'0',opacity:'0.5'

                }} key={item.id} value={index} aria-label="left aligned">
                   <img 
              onClick={() => {
                  setz(index)
                 }}
            style={{
              borderRadius:'5px',
           
                marginRight: 5 }}
            width={'100%'}
            height={'100%'}
            src= {item}
            alt=""
          />
                </ToggleButton>
                
              )
            })}

    </ToggleButtonGroup>

         
        </Box>
        <Button sx={{ my: 2, textTransform: "capitalize" }} variant="contained">
          <AddShoppingCart sx={{ mr: 2 }} /> Add To card
        </Button>
      </Box>
    </Stack>
  );
};

export default Dialogmain;
