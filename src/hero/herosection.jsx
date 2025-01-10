import { ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Link, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Herosection = () => {
  const theme =useTheme()
  const swiper1 =[
    {title:'MEN',link:'https://res.cloudinary.com/djqqkgwwr/image/upload/v1736549331/banner-15_egpxjl.jpg'},
    {title:'WOMEN',link:'https://res.cloudinary.com/djqqkgwwr/image/upload/v1736549343/banner-25_u40eh6.jpg'},
  ]
  return (
<>
      <Container sx={{ display: "flex", alignItems: "center", mt: 3 ,gap:2 ,position:'relative',pt:2}}>
       <Swiper
       loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiper1.map((item) => {
            return(
              <SwiperSlide key={item.title} className="dad"> 
             <img src={item.link} alt=""  />
           <Box  sx={{
             [theme.breakpoints.up('sm')]: {
               color:'black',
              position:'absolute',
              top: '50%',
              transform:' translateY(-50%)',
              ml:10,
              textAlign:'left',
              zIndex:'1',
              my:2
            },
            [theme.breakpoints.down('sm')]: {
           
             my:4
           },
          }}>
            <h4 className="title ">Lifestyle collection</h4>
            <p className="category ">{item.title}</p>
            <p className="discount ">
              SALE UP TO <span>30% OFF</span>
            </p>
            <p className="description ">Get Free Shipping on orders over $99.00</p>
            <a
              className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedDark MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorDark MuiButton-root MuiButton-contained MuiButton-containedDark MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorDark css-3d5h2s"
              // tabindex="0"
              href="#"
            >
              Shop Now<span className="MuiTouchRipple-root css-w0pj6f"></span>
            </a>
          </Box>
          </SwiperSlide >
            )
          })}
        
        </Swiper>
        <Box  sx={{
          display:{xs: 'none',md:'block'},
          minWidth:'26.7%'
        }}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img width={'100%'} className="rod"  src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1732297291/banner-16_lirvu3.jpg" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: " translateY(-50%)",
              }}
            >
              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "13px",
                }}
                variant="body1"
              >
                GAMING 4K
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  margin: "0px 0px 16px",
                  fontWeight: 500,
                  lineHeight: 1.235,
                  fontSize: "20px",
                  letterSpacing: "1.2px",
                }}
                variant="body1"
              >
                DESKTOP & <br />
                LAPTOPS
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  "&:hover": {
                    color: "#D23F57",
                    cursor: "pointer",
                  },
                  transition: "0.2s",
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIos sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img width={'100%'} className="rod"  src="https://res.cloudinary.com/dtomtlfcs/image/upload/v1732297292/banner-17_kz8fal.jpg" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "30px",
                left: "32px",
              }}
            >
              <Typography
                sx={{
                  color: "#2B3445",
                  fontSize: "13px",
                }}
                variant="body1"
              >
                GAMING 4K
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  margin: "0px 0px 16px",
                  fontWeight: 500,
                  lineHeight: 1.235,
                  fontSize: "20px",
                  letterSpacing: "1.2px",
                }}
                variant="body1"
              >
                SUMMER & <br />
                SALE20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  "&:hover": {
                    color: "#D23F57",
                    cursor: "pointer",
                  },
                  transition: "0.2s",
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIos sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
     
</>
  );
};

export default Herosection;
