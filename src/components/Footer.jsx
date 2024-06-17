import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { SmallContainers } from './utilites/smallContainer';


const Footer = () => {
  console.log("footer rendered")
  return (
    <div className="bg-transparent">
      <div className="flex justify-between items-center">
        
          <SmallContainers
            to={"/home"} 
            title={<HomeIcon/>}
          />
          <SmallContainers
            to={"/overview"} 
            title={<SearchIcon/>}
          />
        </div>
      
    </div>
  )
}

export default React.memo(Footer);