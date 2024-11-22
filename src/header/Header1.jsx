import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import { Box, IconButton, useTheme, Typography, Stack, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const options = [
  'EN',
  'AR',

];








const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
const [selectedIndex, setSelectedIndex] = useState(1);
const open = Boolean(anchorEl);
const handleClickListItem = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuItemClick = (event, index) => {
  setSelectedIndex(index);
  setAnchorEl(null);
};

const handleClose = () => {
  setAnchorEl(null);
};
  return (
    <Box sx={{ bgcolor: "#2b3445" ,py:'4px'}}>
 <Container>
 <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          ml: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            bgcolor: "#D23F57",
            borderRadius: "12px",
            p: "4px 12px",
            fontSize: "13px",
            fontWeight: "bold",
            color: "#fff",
         
          }}
        >
          HOT
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
            ml:1
          }}
        >
          Free Express Shipping
        </Typography>
        <Box flexGrow={1} />

        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined  sx={{
                color:"#fff"
              }}/>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined sx={{
                color:"#fff"
              }} />
            </IconButton>
          )}
        </div>
        <List
        component="nav"
        aria-label="Device settings"
        sx={{
          py:0
        }}
    
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{px:0}}
        >
          <ListItemText
          sx={{
            ".MuiTypography-root":{color:'#fff'}
          }}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{color:'#fff'}}/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
        <FacebookIcon
          sx={{
            fontSize: "25px",
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            fontSize: "25px",
            color: "#fff",
            mx: 1,
          }}
        />
        <TwitterIcon
          sx={{
            fontSize: "25px",
            color: "#fff",
          }}
        />
      </Stack>
 </Container>
    </Box>
  );
};

export default Header1;
