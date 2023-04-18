import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {lineChartData} from "../utils/data.js";
import arrow from '../assets/arrow.png'

export default function LineCharts() {

    return (
        <div className='line-chart-holder'>
            <div className='chart-header'>
                <div className='chart-heading'>
                    <h2>Activities</h2>
                    <p>
                        May - June 2021
                        <img src={arrow}
                             alt=''
                             className='arrow-logo'/>
                    </p>
                </div>
                <div className='legends-line'>
                    <div className='legends-item'>
                        <div className='legend-logo' style={{backgroundColor: '#E9A0A0'}}></div>
                        <p>Guest</p>
                    </div>
                    <div className='legends-item'>
                        <div className='legend-logo' style={{backgroundColor: '#9BDD7C'}}></div>
                        <p>User</p>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height={150}>
                <LineChart
                    data={lineChartData}
                    margin={{left: -25}}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} fontFamily={'Lato, sans-serif'} fontSize={'12px'}/>
                        <YAxis tickCount={100} interval={19} axisLine={false} tickLine={false} fontFamily={'Lato, sans-serif'} fontSize={'12px'}/>
                        <CartesianGrid stroke="#EAEAEA" vertical={false}/>
                        <Line type="monotone" dataKey="guest" stroke="#E9A0A0" strokeWidth={3} dot={false}/>
                        <Line type="monotone" dataKey="user" stroke="#9BDD7C" strokeWidth={3} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
