import Header1 from "./header/header1"
import Header2 from "./header/header2"
import Header3 from "./header/header3"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Herosection from "./hero/herosection";
import Iconsection from "./hero/iconsection";

import Towmain from "./main/towmain";
import Footer from "./footer/footer";
import  Scrollbar  from "./scroll/Scrollbar";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
   <Header1 />
   <Header2 />
   <Header3 />
<Box
 bgcolor={theme.palette.bg.primary} 
 >
     <Herosection/>
     <Iconsection/>

    <Towmain/>
    <Footer/>
    <Scrollbar/>
</Box>
   </ThemeProvider>
   </ColorModeContext.Provider>
  
  )
}

export default App
