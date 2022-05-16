import {useRouter} from 'next/router'


const Review = () => {
const route = useRouter()
const{ productID , reviewId} = route.query


    return (
    <div> review of product id {productID}  and  review  is {reviewId} </div>
    

  )
}

export default Review