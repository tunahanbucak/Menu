import React,{useState} from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Tabs,Tab, AppBar, Typography,Toolbar,  } from '@mui/material';
import CategoriesPage from './CategoriesPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';




const Header = () => {
  const [value, setValue] = useState();

  
  return (
    
    <React.Fragment>
        <AppBar sx={{ background: "#063990"}}>
            <Toolbar>
             <LocalFloristIcon/>
             <Typography> HARTLAP ERKEK OGRENCI YURDU KERMESI</Typography>
               <Typography></Typography>
              <Tabs 
               sx={{marginLeft: 'auto'}}
              textColor="inherit" 
               value={value}  
               onChange={(e, value) => setValue(value)}               
               indicatorColor="secondary"
               >
                <Tab label="Ana Sayfa" />
                <Tab label="Kategoriler" />
                <Tab label="Adres ve Iletisim" />
              </Tabs>
            </Toolbar>
        </AppBar>
        {value === 0 && <HomePage />}
      {value === 1 && <CategoriesPage />}
      {value === 2 && <ContactPage />}
    </React.Fragment>
   
    
  );

 

    
  };

export default Header;
