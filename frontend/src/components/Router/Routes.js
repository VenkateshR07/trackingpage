import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Service from '../Assets/JS/Service'
import Report from '../Assets/JS/Report'
import Master from '../Assets/JS/Master'
import DailyReport from '../Assets/JS/DailyReport'
import WeeklyReport from '../Assets/JS/WeeklyReport'
import MonthlyReport from '../Assets/JS/MonthlyReport'
import ServiceList from '../Assets/JS/ServiceList'

function Router() {
  return (
    <>
    <Routes>
       <Route path='/' element={<ServiceList/>}/>
       <Route path='/report' element={<Report/>}/>
       <Route path='/master' element={<Master/>}/>
       <Route path='/service' element={<Service/>}/>
       <Route path='/dailyreport' element={<DailyReport/>}/>
       <Route path='/weeklyreport' element={<WeeklyReport/>}/>
       <Route path='/monthlyreport' element={<MonthlyReport/>}/>
    </Routes>
    </>
  )
}

export default Router