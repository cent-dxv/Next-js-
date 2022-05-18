import {useRouter } from 'next/router'

export async function getStaticProps(Context) {
  const { params } = Context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await responce.json();
  if(!data.id) { return{notFound:true}}

  return {
    props: {
      post: data,
    }
  }
}

export async function getStaticPaths(){

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
        paths :[
            {
                params :{postId: '1'}
            },
            {
                params :{postId: '2'}
            },{
                params :{postId: '3'}
            }

        ],
        //   paths,
        // fallback : false,
        fallback :true
    }

}

const PostDetails = ({ post }) => {
    const router = useRouter()
    if(router.isFallback){
        return <h1> Loading .. ....</h1>
    }
  return (
    <div>
      <h1>post details</h1>
      <h3> {post.title}</h3>
      <p> {post.body}</p>
    </div>
  );
};

export default PostDetails;
