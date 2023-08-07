import React, { useEffect } from 'react'

const Dashboard = () => {

  useEffect(() => {
    console.log('ini halaman dashboard');
  }, [])

  return (
    <div>
      <h1>dashboard: first setup</h1>
    </div>
  )
}

export default Dashboard