const HomePost = ({ post }) => {
  return (
    <div className="flex w-full items-center space-x-6 px-8 mt-8">
      <div className="w-[35%] h-[200px]  flex justify-center items-center">
        <img src={post.photo} className="h-full w-full  object-cover"/>
      </div>

      <div className="flex flex-col w-[60%]">
        <h1 className="font-bold md:text-2xl text-xl md:mb-2 mb-1">{post.title}</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between">
          <p>{post.username}</p>
          <div className=" flex  space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
          </div>
          </div>

          <p className="text-sm md:text-lg">
           {post.description.slice(0,200)+ "...Read more"}
          </p>
        </div>
      </div>
  );
};

export default HomePost;
