import React from 'react'

function Header() {
  return (
    <div className='container-fluid d-flex flex-row justify-content-between bg-danger'>

            <div>
                <h1>Employee Detail</h1>
            </div>

            <div className='d-flex w-25 '>
                <div style={{listStyle:'none'}} className='d-flex w-100 justify-content-between py-3 '>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Location</li>
                    <li>Extra</li>

                </div>
            </div>

      
    </div>
  )
}

export default Header
