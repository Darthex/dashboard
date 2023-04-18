import React from "react";
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import {pieChartData} from "../utils/data.js";
import arrow from '../assets/arrow.png'

export default function PieCharts() {

    return (
        <div className='pie-chart-holder'>
            <div className='pie-chart-heading'>
                <h2>Top Products</h2>
                <p>
                    May - June 2021
                    <img src={arrow} alt='' className='arrow-logo'/>
                </p>
            </div>
            <div className='pie-legends'>
                <ResponsiveContainer className='pie-chart'>
                    <PieChart >
                        <Pie data={pieChartData} dataKey={pieChartData.value}/>
                    </PieChart>
                </ResponsiveContainer>
                <div className='legends'>
                    <div className='legend-cont'>
                        <div className='legend-logo pie-leg-logo'
                             style={{backgroundColor: '#98D89E'}}>
                        </div>
                        <div>
                            <p>Basic Tees</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                55%
                            </small>
                        </div>
                    </div>
                    <div className='legend-cont'>
                        <div className='legend-logo pie-leg-logo'
                             style={{backgroundColor: '#F6DC7D'}}>
                        </div>
                        <div>
                            <p>Custom Short Pants</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                31%
                            </small>
                        </div>
                    </div>
                    <div className='legend-cont'>
                        <div className='legend-logo pie-leg-logo'
                             style={{backgroundColor: '#EE8484'}}>
                        </div>
                        <div>
                            <p>Super Hoodies</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                14%
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
