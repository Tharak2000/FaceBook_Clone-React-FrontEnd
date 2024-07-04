import React from 'react'
import './leftPane.css'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function LeftPane() {
  return (
    <div class="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className="leftPaneMenuIcond">  
            <MarkUnreadChatAltIcon class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Message</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <GroupsIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Groups</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <RssFeedIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Pages</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <FlagIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Events</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <CalendarMonthIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Calendar</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <BuildIcon class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Settings</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <SportsEsportsIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Games</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <NewspaperIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">News</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <WorkOutlineIcon class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Jobs</span>
          </li>
          <li className="leftPaneMenuIcond">  
            <AddShoppingCartIcon  class="leftPaneMenuIcon"/>
            <span className="leftPaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesYouLiked">
            <h3>Pages You Liked</h3>
          </div>
          
          <div className="pageList">
          <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
        <li className="PageListItem">
          <img src="/images/1.jpg" alt="" className="pagePic" />
          <span className="pageName">Thara vlog</span>
        </li>
          </div>
        </div>
        
      </div>
    </div>
  )
}
