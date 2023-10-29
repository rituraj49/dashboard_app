import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DatasetIcon from '@mui/icons-material/Dataset';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Barchart from './Barchart';
import Tabledata from './Tabledata';

export default function Sidebar() {
  const [state, setState] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

    // setState({ ...state, [anchor]: open });
    setState(open);
  };
  const anchor = "left";

  const handleSelectedItem = (index) => {
    setSelectedIndex(index);
    
    // selectedIndex === 0 ?
    // : 
    // selectedIndex === 1 ?
    // :null
  }

const handleRenderItem = () => {
    // console.log(item);
   if(selectedIndex === 0){
    return <Barchart />
   } else if(selectedIndex === 1){
    return <Tabledata />
   }
}

  const list = () => (
    <Box
      sx={{ width: 250, m:1}}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <Button variant='outlined' color='primary'> <ChevronLeftIcon/></Button>
      <List>
        {['Analytics', 'Data'].map((text, index) => (
          <ListItem 
          key={text}
          disablePadding>
            <ListItemButton
              selected={index === selectedIndex}
              onClick={()=> handleSelectedItem(index)}
            >
              <ListItemIcon>
                {
                    index === 0 ?
                    <AssessmentOutlinedIcon /> :
                    <DatasetIcon />
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{margin:"10px"}}>
          <Button onClick={toggleDrawer(true)} variant='outlined' color='primary'> <ChevronRightIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(true)}
          > 
            {list()}
          </Drawer>
            {handleRenderItem()}
    </div>
  );
}