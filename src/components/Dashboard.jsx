import React from "react";
import Content from "./Content.jsx";
import dashLogo from '../assets/chart.png'
import tagLogo from '../assets/tag.png'
import calenderLogo from '../assets/check-mark.png'
import userLogo from '../assets/user.png'
import settingsLogo from '../assets/settings.png'

export default function Dashboard() {

    const [selection, setSelection] = React.useState('Dashboard')

    return (
        <div className='dashboard-page'>
            <div className='sidebar'>
                <div className='nav-heading'>
                    <h1>Board.</h1>
                </div>
                <div className='nav-items'>
                    <a className='nav-item' onClick={() => setSelection('Dashboard')}>
                        <img src={dashLogo}
                             alt=''
                             className={selection === 'Dashboard' ? 'button-logo logo-underline' : 'button-logo'}/>
                        <p style={{fontWeight: selection === 'Dashboard' ? 700 : 400}}>
                            Dashboard
                        </p>
                    </a>
                    <a className='nav-item' onClick={() => setSelection('Transactions')}>
                        <img src={tagLogo}
                             alt=''
                             className={selection === 'Transactions' ? 'button-logo logo-underline' : 'button-logo'}/>
                        <p style={{fontWeight: selection === 'Transactions' ? 700 : 400}}>
                            Transactions
                        </p>
                    </a>
                    <a className='nav-item' onClick={() => setSelection('Schedules')}>
                        <img src={calenderLogo}
                             alt=''
                             className={selection === 'Schedules' ? 'button-logo logo-underline' : 'button-logo'}/>
                        <p style={{fontWeight: selection === 'Schedules' ? 700 : 400}}>
                            Schedules
                        </p>
                    </a>
                    <a className='nav-item' onClick={() => setSelection('Users')}>
                        <img src={userLogo}
                             alt=''
                             className={selection === 'Users' ? 'button-logo logo-underline' : 'button-logo'}/>
                        <p style={{fontWeight: selection === 'Users' ? 700 : 400}}>
                            Users
                        </p>
                    </a>
                    <a className='nav-item' onClick={() => setSelection('Settings')}>
                        <img src={settingsLogo}
                             alt=''
                             className={selection === 'Settings' ? 'button-logo logo-underline' : 'button-logo'}/>
                        <p style={{fontWeight: selection === 'Settings' ? 700 : 400}}>
                            Settings
                        </p>
                    </a>
                </div>
                <div className='nav-footer'>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <Content selections={selection}/>
        </div>
    )
}
