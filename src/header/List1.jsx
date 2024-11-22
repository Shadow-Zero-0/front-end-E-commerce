import List from "@mui/material/List";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, ListItemText, Paper, Typography } from "@mui/material";
const List1 = () => {
  return (
<Box sx={{display:'flex',alignItems:'center'}}>
   
    {[
            "Home",
            "Mega menu",
            "full screen menu",
            "pages",
            "user account",
            "vendor account",
          ].map((item) => {
            return (
<Box key={item}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          ":hover .hover": {
            display: "block",
          },
          ":hover" : {
            cursor:'pointer'
          },
          mr:5,
        
        }}
      >
        <Typography variant="body1">{item} </Typography>
        <ExpandMoreIcon  />
  
        <Box
          className=" hover"
          sx={{
            position: "absolute",
            top: "100%",
            minWidth: "170px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "none",
            zIndex:'2'
          }}
        >
          <Paper sx={{ mt:1 , borderRadius: "10px", }}>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{
                  position:'relative',
                  ":hover .hoverTwo":{display:'block'}
                }} disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="products" />
                    <ArrowForwardIosIcon  sx={{fontSize:'16px'}}/>
                  </ListItemButton>
  <Box className='hoverTwo' sx={{position:'absolute',top:0,left:'100%',display:'none'}}>
     <Paper sx={{ ml:0.5,borderRadius: "10px"}}>
                     <nav aria-label="secondary mailbox folders">
             <List>
               <ListItem disablePadding>
                 <ListItemButton>
                   <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="Link1" />
                 </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                 <ListItemButton component="a" href="#simple-list">
                   <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="Link2" />
                 </ListItemButton>
               </ListItem>
               <ListItem disablePadding>
                 <ListItemButton component="a" href="#simple-list">
                   <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="Link3" />
                 </ListItemButton>
               </ListItem>
             </List>
           </nav>
     </Paper>
  </Box>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="orders" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText sx={{
                      '& .MuiTypography-root':{fontSize:'15px'}
                    }} primary="profile" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
      
        </Box>
        
      </Box>
            )
          })}
</Box>
  );
};

export default List1;
