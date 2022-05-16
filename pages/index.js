import Link from 'next/link';
import {useRouter} from 'next/router';

const Home = () => {
  const route = useRouter();
  return (
    <div>
    Home
   <div>

   <Link href="/blog">
      <a > blog</a>
    </Link> 
    <Link href="/product/20">
      <a > product detils </a>
    </Link> 
   </div>
   <button onClick= {()=> route.replace('/blog')}> route</button>
    
    </div>

  )
}

export default Home