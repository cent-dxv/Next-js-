import { useRouter } from "next/router";

export async function getStaticProps(Context) {
  const { params } = Context;
  const responce = await fetch(`http://localhost:4000/products/${params.productID}`);
  const data = await responce.json();
  console.log( ' data ois ' + data.name);
  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      product: data,
      
    },
  };
}

export async function getStaticPaths() {
  // const responce = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts`
  //   );
  //   const data = await responce.json();

  // const paths = data.map ((post)=>{
  //     return {
  //         params :{
  //             postId: `${post.id}`
  //          }
  //     }
  // })

  return {
    paths: [
      {
        params: { productID: "1" },
      },
      {
        params: { productID: "2" },
      },
      {
        params: { productID: "3" },
      },
    ],
    //   paths,
    // fallback : false,
    fallback: true,
  };
}

const ProductDetails = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1> Loading .. ....</h1>;
  }
  return (
    <div>
      <h1>cart product  details</h1>
      <h3> {product.name}</h3>
      <p> {product.author}</p>
    </div>
  );
};

export default ProductDetails;
