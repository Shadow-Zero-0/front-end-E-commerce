import {
  Box,
  Button,
  Container,
  IconButton,
  Rating,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { CloseSharp } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import Dialogmain from "./Dialogmain";
const Towmain = () => {
  const product = [
    {
      name: "Jacket",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 3.5,
      pris: 155.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426185/1_9_omphhf.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426184/1_8_z1v36j.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426185/1_10_tverta.jpg",
      ],
    },
    {
      name: "T-shirt",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 4.5,
      pris: 155.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426152/NASA_Space_Bear_Print_T-Shirt_chrlpm.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426153/163826656927114e9da27ea115f55404141ba11264_thumbnail_900x_vbt8nb.webp",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426167/Paper_Plane_of_Liberty_Print_Crew_Neck_Short_Sleeve_T-Shirts_-_Black___XL_riraxe.png",
      ],
    },
    {
      name: "compartment",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 1.5,
      pris: 155.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731429273/2_10_h48ggj.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731429274/1_17_vi0mhn.jpg",
      ],
    },
    {
      name: "dress",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 2.5,
      pris: 200.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426250/2_9_ltelxb.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426252/2_8_ttgw2i.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426249/2_4_qrsfvq.jpg",
      ],
    },
    {
      name: "accessories",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 5,
      pris: 15.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731803733/2_11_l6kopk.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731803810/1_18_qkekch.jpg",
      ],
    },
    {
      name: "hour",
      dis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea nobis ratione, voluptate quaerat",
      to: 4.5,
      pris: 55.99,
      linkimage: [
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426256/1_3_vwk7hb.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426256/3_n2xvhw.jpg",
        "https://res.cloudinary.com/djqqkgwwr/image/upload/v1731426347/4_yvgdeh.jpg",
      ],
    },
  ];
  const [click, setclick] = useState({});

  const theme = useTheme();



  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      sx={{
        mt: 5,
      }}
    >
      <Stack
        sx={{
          flexDirection: { sx: "column", lg: "row" },
          alignItems: { sx: "flex-start", lg: "center" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "25px",
            }}
          >
            Selected Products
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              color: theme.palette.text.secondary,
            }}
          >
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Box
          sx={{
            mt: { xs: 2, lg: "0" },
          }}
        >
        
        </Box>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <AnimatePresence>
          {product.map((item) => {
            return (
              <Card
               
                key={item.name}
                sx={{
                  maxWidth: 300,
                  m: 5,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.1",
                    transition: "0.25s",
                    rotate: "2deg",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.linkimage[0]}
                  alt="Paella dish"
                />
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                  disableSpacing
                >
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                    }}
                    variant="body1"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                    }}
                    variant="body1"
                  >
                    ${item.pris}
                  </Typography>
                </CardActions>
                <CardContent>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.dis}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    m: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setclick(item);
                    }}
                    sx={{ mr: 1, textTransform: "capitalize" }}
                    variant="text"
                  >
                    <AddShoppingCartIcon sx={{ mr: 2 }} /> Add To card
                  </Button>
                  <Rating
                    name="half-rating"
                    defaultValue={item.to}
                    precision={0.5}
                  />
                </Box>
              </Card>
            );
          })}
         
        </AnimatePresence>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiPaper-root": { minWidth: { xs: "95%", md: 800 } },
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: "5px",
            right: "10px",
            ":hover": {
              color: "red",
              rotate: "360deg",
              transition: "0.4s",
            },
          }}
          onClick={handleClose}
        >
          <CloseSharp />
        </IconButton>
        <Dialogmain product={click} />
      </Dialog>
    </Container>
  );
};

export default Towmain;
