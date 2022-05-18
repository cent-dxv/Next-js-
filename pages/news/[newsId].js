import { useRouter } from "next/router";

export async function getServerSideProps(Context) {
  const { params } = Context;
  console.log(params)
  const responce = await fetch(`http://localhost:4000/news/${params.newsId}`);
  const data = await responce.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      news: data,
    },
  };
}



const ProductDetails = ({ news }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1> Loading .. ....</h1>;
  }
  return (
    <div>
      <h2> {news.title}</h2>
      <h6>{news.category}</h6>
      <p> {news.description}</p>
    </div>
  );
};

export default ProductDetails;
