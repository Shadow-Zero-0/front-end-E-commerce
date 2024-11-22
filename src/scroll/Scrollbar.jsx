import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';

const Scrollbar = () => {
    return (
      <Zoom in={useScrollTrigger()}>
          <Fab onClick={() => {
            window.scrollTo(0, 0);
          }
        
          } sx={{
            position:'fixed',
            bottom:'33px',
            right:'33px'
        }} size="medium" color="primary" aria-label="add">
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
      </Zoom>
    );
}

export default Scrollbar;
