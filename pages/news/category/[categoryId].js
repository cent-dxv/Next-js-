import Link from "next/link";

export async function getStaticProps(context) {
  const { params } = context;
  const { categoryId } = params;

  const responce = await fetch(
    `http://localhost:4000/news?category=${categoryId}`
  );
  const data = await responce.json();
  return {
    props: {
      news: data,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { categoryId: "1" },
      },
      {
        params: { categoryId: "2" },
      },
      {
        params: { categoryId: "3" },
      },
    ],
   
    fallback: true,
  };}

function Catagory({ news }) {
  return (
    <div>
      <h1>Catagory</h1>
      {news?.map((news, index) => (
        <div key={index}>
          <Link href={`news/${news.id}`}>
            <a>
              <h2> {news.title}</h2>
              <h6>{news.category}</h6>
              <p> {news.description}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Catagory;
