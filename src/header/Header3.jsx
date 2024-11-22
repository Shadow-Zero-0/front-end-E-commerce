import {
  Box,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Drawer from "@mui/material/Drawer";
import { CloseSharp } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import List1 from "./List1";

const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems:'center',
        justifyContent: "space-between",
        mt:10
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.mycolor.primary,
            color: theme.palette.text.primary,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
            }}
            variant="body1"
          >
            categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "222px",
              bgcolor: theme.palette.mycolor.primary,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

{useMediaQuery('(min-width:1200px)')&& <List1 /> }
<Box sx={{
            display:{xs:'block',lg:'none'} }}>
    
  
   <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon  />
        </IconButton> 
   
</Box>

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-elevation16": { height: "100%" } }}
      >
        <Box
          sx={{
            width: "444px",
            height: "300px",
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
        >
        
               <IconButton
              sx={{
                position: "absolute",
                top: "0",
                right: "5px",
                ":hover": {
                  color: "red",
                  rotate: "360deg",
                  transition: "0.4s",
                },
              }}
              onClick={toggleDrawer("top", false)}
            >
              <CloseSharp />
            </IconButton>
            
          {[
            "Home",
            "Mega menu",
            "full screen menu",
            "pages",
            "user account",
            "vendor account",
          ].map((item) => {
            return (
              <Accordion key={item} elevation={0} sx={{ bgcolor: "inherit" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {item}
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary="Link1" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary="Link2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary="Link3" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Accordion>
            );
          })}
        </Box>
        
      </Drawer>
    </Container>
  );
};

export default Header3;
