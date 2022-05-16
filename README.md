This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## In This Example 
senarios 1 , 2 , 3: file base route 
    :simply creat file its automaticaly be routed 
    :404.js

senarios 4 : routing to spacific page details
 create [productId].js
 getting parameter : import {useRouter} from 'next/router';
                   :  const route = useRouter();
                   : const productId = route.query.productID
           defualt : product/index.js
                eg : http://localhost:3000/product/20

senarios 5 : routing to nested dynamic
        eg : http://localhost:3000/product/54/review/20
    review : [reviewId]
   product :  dir [produtID] -> review -> [reviewId]
           : const{ productID , reviewId} = route.query


senarios 6 : catch all Routes
       doc : doc -> [[params]]
            : const { params } = router.query;
            : console.log(params);

#navigatuion 
    :  <Link href="/blog">
    :  <a > blog</a>
    :  </Link> 
    : route.replace('/blog') / push
