
export async function getStaticProps (){
   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
   const data = await response.json();
//    console.log(data[0]);
   return {
       props : {
           users:data,
       },
   }
} 


const user = ({users}) => {
  return (
    <>
      <h1> user list</h1>
      {users.map ((user)=>(
          <> 
          <h4> name: {user.name}</h4>
          <p>email:{user.email}</p>
          <p> phone no : {user.phone}</p>
          <p>company  : {user.company.name}</p>
          </>
      ))}
    </>
  );
};

export default user;



