
import { useRouter } from "next/router";

const ProductID = () => {
    const route =useRouter()
    const productId = route.query.productID
  return <div> product Detials id :  {productId}</div>;
};

export default ProductID;
