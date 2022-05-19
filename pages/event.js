import React, { useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const {query} = context
  const{category} = query


   const query_string =  category ? '?category=sports' : ''
//  let query_string = ''
  console.log(category)
  const respose = await fetch(`http://localhost:4000/events${query_string}`);
  const data = await respose.json();
  return {
    props: {
      events: data,
    },
  };
}

const Event = ({ events }) => {
  const [event, setevent] = useState(events);
  const route = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    route.push("/event?category=sports" ,undefined , {shallow :true});
    // setevent(events.filter((data)=> data.category === 'food'));
    setevent(data)
  };
  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {console.log(events)}
      {event.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default Event;
