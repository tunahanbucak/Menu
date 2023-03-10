import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Image from './assets/kermes.jpg';
import { Box,Button,Container,Grid,Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import './HomePage.css';
import MENU1 from './assets/menu_resim.jpg'
import MENU2 from './assets/menu_resim1.jpg'
import MENU3 from './assets/menu_resim2.jpg'
import Carousel from 'react-material-ui-carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IMG from './assets/srntp.jpg'
import IMG1 from './assets/serntp.jpg'




const items = [
  {
    title: 'First Image',
    description: 'This is the first image',
    image: IMG1,
  },
  {
    title: 'Second Image',
    description: 'This is the second image',
    image: IMG,
  },
 

];




const CarouselItem = styled('div')(({ theme }) => ({
  height: '550px',
  width:'750px',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const CarouselButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
});

const Header = styled('header')({
  backgroundColor: 'grayy',
  padding: '50px 0',
  marginTop:'60px'
 
});

const Content = styled('section')({
  backgroundColor: 'gray',
  padding: '40px 0',
  
});

const ImageWrapper = styled('div')({
  height: '100vh',
  width: '97vh',
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    objectFit: 'cover',
    objectPosition: '50% 50%',
    height: '100%',
    width: '100%',
    
  },
});





function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0); // default value is 0


  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };


  return (
    <>

       
  

      <Header>
   
        <Container maxWidth="md"> 
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography  component="h1" variant="h2" gutterBottom>
                Kermesimize Hoş Geldiniz
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <br />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Box sx={{ width: '100%', maxWidth: '800px', mt: 4 }}>
        <Box sx={{ position: 'relative' }}>
        <Carousel
          autoPlay={false}
          animation="slide"
          swipe={false}
          navButtonsAlwaysVisible
          navButtonsProps={{ style: { backgroundColor: 'transparent' } }}
          indicatorContainerProps={{ style: { marginTop: '40px' } }}
          activeIndicatorIconButtonProps={{ style: { color: 'white' } }}
          indicatorIconButtonProps={{ style: { color: 'gray' } }}
          index={activeIndex}
          onChange={(index) =>{
            if (typeof index === "number") {
            setActiveIndex(index)
          }
        }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} style={{ backgroundImage: `url(${item.image})` }}>
              <Box sx={{ position: 'absolute', bottom: '0', left: '0', p: 4, color: 'white' }}>
              </Box>
            </CarouselItem>
          ))}
        </Carousel>
        <CarouselButton sx={{ left: '0' }} onClick={handlePrevClick}>
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
        </CarouselButton>
        <CarouselButton sx={{ right: '0' }} onClick={handleNextClick}>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </CarouselButton>
      </Box>
      </Box>
      </Box> 

      <Content>
        <Container maxWidth="md">
        <Grid container spacing={9} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box textAlign= 'left' >
                <Typography variant="h2" component="h2" gutterBottom>
                  KERMESIMIZ HAKKINDA
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Kermesimiz de asil gaye ALLAH rizasidir.
                </Typography>            
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box textAlign="right">
              <ImageWrapper >
                <img src={Image} alt="kermes" />
              </ImageWrapper>
              </Box>
            </Grid>
          </Grid>         
        </Container>
      </Content>
      </Header>
    
      
      <div style={{ display: "flex", gap: "16px" }}>
      <Card className='card' sx={{ maxWidth: 345 , margin: "auto" }}>
      <CardActionArea>
        <CardMedia className='media'
          component="img"
          height="140"
          image={MENU1}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GUNUN MENUSU
          </Typography>
          
        </CardContent>
      </CardActionArea>
      </Card>
      <Card className='card' sx={{ maxWidth: 345, margin: "auto" }}>
       <CardActionArea>
        <CardMedia className='media'
          component="img"
          height="140"
          image={MENU2}
          alt="Image"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           FIX MENU
          </Typography>      
        </CardContent>
      </CardActionArea>
      </Card>
     <Card className='card' sx={{ maxWidth: 345, margin: "auto"   }}>
      <CardActionArea>
        <CardMedia className='media'
          component="img"
          height="140"
          image={MENU3}
          alt="Image"
      
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ALAKART MENU
          </Typography>
         
        </CardContent>
      </CardActionArea>
    </Card>  
  </div>
  
    </>
  );
}

export default HomePage;



