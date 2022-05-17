import Link from "next/link";

export async function getStaticProps() {
  console.log("Generating or re Generating");
  const responce = await fetch("http://localhost:4000/products");
  const data = await responce.json();
  return {
    props: {
      product: data,
    },
    revalidate: 5
  } 
}

const Product = ({ product }) => {
  return (
    <>
      {product.map((product ,index) => (
        <>
          <Link href={`product/${product.id}`}>
            <a key={index}>
              <h1> {product.name}</h1>
              <p>{product.author}</p>
            </a>
          </Link>
        </>
      ))}
    </>
  );
};

export default Product;
