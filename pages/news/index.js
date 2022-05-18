import Link from 'next/link';


export async function getServerSideProps (){
 const response = await fetch('http://localhost:4000/news');
 const data = await response.json();
 return {
     props: {
         news :data
     }}
 }


const News = ({news}) => {
  return (
    <div>
        <h1>CNBC  News letest </h1>
        {news.map((news ,index)=>(
            <div key = {index}>
                <Link href = {`news/${news.id}`}>
                    <a>
                        <h2> {news.title}</h2>
                        <h6>{news.category}</h6>
                        <p> {news.description}</p>
                
                    </a>
                </Link>
            </div>
        ))} 
    </div>
  )
}

export default News