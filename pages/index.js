import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const route = useRouter();

  return (
    <>
      <title> next try out</title>
      Home p
     <Link href="/user"> 
     
      <button>user </button>
     </Link> 
    </>
  );
};

export default Home;
