import React from 'react'
import logo from './logo.png'

export const Dashboard = () => {

    const electrician = [
        {
            name:'John Doe',
            product:'Product Name Here',
            itemID:101,
            loyaltyvalue:25,
            totloyaltyvalue:175
        }
    ]
  return (
    <div className='dashboard-section'>
    <header>
        <center>
            <img src={logo} alt='Company Logo'/>
            <h1>Polycrome Electrician Loyalty System</h1>
            <h3>Simply scan the item QR or enter the 3-digit item ID below</h3>
            <input placeholder='Enter item ID Here'/> <button type='submit'>Submit</button>
            <br/><br/>
            <h2>Dashboard</h2>
        </center>
    </header>


    <div className='electrician_details centered'>
    {electrician.map((electrician) => (
        <div key={electrician.itemID}>
          <p>Product: {electrician.product}</p>
          <p>Item ID: {electrician.itemID}</p>
          <p>Loyalty Value: {electrician.loyaltyvalue}</p>
            <br/>
          <p style={{fontSize:20, fontWeight:700}}>Name: {electrician.name}</p>
          <p style={{fontSize:20, fontWeight:700}}>Total Loyalty Points: {electrician.totloyaltyvalue}</p>
        </div>
      ))}
      </div>






    </div>
  )
}
