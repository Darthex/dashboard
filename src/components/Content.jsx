import React, {useContext} from "react";
import {signOut} from 'firebase/auth'
import {auth} from "../utils/firebaseConfig.js";
import {AuthContext} from "../contexts/AuthContext.jsx";
import search from '../assets/lens.png'
import bell from '../assets/notification.png'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'
import arrow from '../assets/arrow.png'
import LineCharts from "./LineCharts.jsx";
import PieCharts from "./PieCharts.jsx";

export default function Content(props) {

    const currentUser = useContext(AuthContext)

    function handleSignOut() {
        signOut(auth).then()
    }

    return (
        <div className='content'>

            <div className='content-header'>
                <h3>{props.selections}</h3>
                <div className='search-field'>
                    <div className='search-bar-holder'>
                        <input placeholder='Search...'
                               className='search-bar'/>
                        <button className='search-button'>
                            <img alt=''
                                 src={search}
                                 className='button-logo search-button search-logo'/>
                        </button>
                    </div>
                    <img alt=''
                         src={bell}
                         className='button-logo'/>
                    <img src={currentUser.photoURL}
                         alt=''
                         className='profile-pic'
                         onClick={handleSignOut}/>
                </div>
            </div>

            <div className='grid-views'>
                <div className='grid-item'
                     style={{backgroundColor: '#DDEFE0'}}>
                    <img src={grid1}
                         alt=''
                         className='button-logo grid-item-logo'/>
                    <h5>Total Revenues</h5>
                    <h3>$2,129,430</h3>
                </div>
                <div className='grid-item'
                     style={{backgroundColor: '#F4ECDD'}}>
                    <img src={grid2}
                         alt=''
                         className='button-logo grid-item-logo'/>
                    <h5>Total Transactions</h5>
                    <h3>1,520</h3>
                </div>
                <div className='grid-item'
                     style={{backgroundColor: '#EFDADA'}}>
                    <img src={grid3}
                         alt=''
                         className='button-logo grid-item-logo'/>
                    <h5>Total Likes</h5>
                    <h3>9,721</h3>
                </div>
                <div className='grid-item'
                     style={{backgroundColor: '#DEE0EF'}}>
                    <img src={grid4}
                         alt=''
                         className='button-logo grid-item-logo'/>
                    <h5>Total Users</h5>
                    <h3>892</h3>
                </div>
            </div>

            <LineCharts/>

            <div className='bottom-content'>
                <PieCharts/>
                <div className='schedules-holder'>
                    <div className='schedule-heading'>
                        <h2>Today's Schedule</h2>
                        <p>
                            See all
                            <img src={arrow} alt='' className='arrow-logo sideways'/>
                        </p>
                    </div>
                    <div className='schedules'>
                        <div className='schedule' style={{borderLeft: '5px solid #9BDD7C'}}>
                            <p>Meeting with suppliers from Kuta Bali</p>
                            <small>14.00-15.00</small>
                            <small>at Sunset Road, Kuta, Bali</small>
                        </div>
                        <div className='schedule' style={{borderLeft: '5px solid #6972C3'}}>
                            <p>Check operation at Giga Factory 1</p>
                            <small>18.00-20.00</small>
                            <small>at Central Jakarta</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
