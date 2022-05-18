import Link from "next/link";

export async function getStaticProps() {
  const response_post = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const post_data = await response_post.json();
  const response_user = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const user_data = await response_user.json();

  return {
    props: {
      user: user_data.slice(),
      post: post_data.slice(),
    },
  };
}

const Post = ({ user, post }) => {
//   console.log(user[0].name + post[0].title);
  return (
    <>
      <h1>Post</h1>
      {post.map((post, index) => (
        <div key = {index}>
          <Link href = {`post/${post.id}`}>
          <div>
              {/* {console.log(user[post.userId])} */}
              {console.log(user[post.userId])}
            <h4>name : {user[0].name}</h4>
            post : {post.title}
          </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Post;
