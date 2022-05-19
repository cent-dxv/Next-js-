import React from 'react'
import useSWR from 'swr'


const fetcher = async () => {
 const response = await fetch('http://localhost:4000/dashboard')
const data = await response.json()
return data
}
const Dashboardswr = () => {
   const {data ,error ,isLoading} = useSWR('dashboard',fetcher)

    return (

        <div>
        {isLoading && (<>loadding ...</>)}
          <h2>Dashboard</h2>
          {console.log(isLoading)}
          <h2>Posts - {data?.posts}</h2>
          <h2>Likes - {data?.likes}</h2>
          <h2>Followers - {data?.followers}</h2>
          <h2>Following - {data?.following}</h2>
        </div>
      )
}

export default Dashboardswr