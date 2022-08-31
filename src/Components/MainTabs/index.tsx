import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Storys from '../Storys';
import ReelsList from '../ReelsList'
import Salas from '../Salas'
import { MainTabsSt } from './styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (Props: TabPanelProps) => {
  const { children, value, index, ...other } = Props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simpletab-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const MainTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <MainTabsSt>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label='tabs fb'>
            <Tab className='tab' label='Stories' {...a11yProps(0)} />
            <Tab className='tab' label='Reels' {...a11yProps(1)} />
            <Tab className='tab' label='Salas' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Storys />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ReelsList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Salas />

        </TabPanel>
      </Box>
    </MainTabsSt>
  )
}

export default MainTabs;
