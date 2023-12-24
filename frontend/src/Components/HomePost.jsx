const HomePost = () => {
  return (
    <div className="flex w-full items-center space-x-6 px-8 mt-8">
      <div className="w-[35%] h-[200px]  flex justify-center items-center">
        <img src="https://imgs.search.brave.com/90FQ0f76aptqH0CCEd12bRpK-yGnO8mb5H5sTgEinWA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tbGxq/Mmo4eHZmbDAuaS5v/cHRpbW9sZS5jb20v/Y2I6akM3ZS4zNzEw/OS93OjE0NTYvaDo5/MDIvcTo5MC9mOmJl/c3QvaHR0cHM6Ly90/aGVtZWlzbGUuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDUvYmxv/Z2dlci5qcGc" className="h-full w-full  object-cover"/>
      </div>

      <div className="flex flex-col w-[60%]">
        <h1 className="font-bold md:text-2xl text-xl md:mb-2 mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between">
          <p>@BhawnaBatra</p>
          <div className=" flex  space-x-2">
            <p>22/12/23</p>
            <p>12:46</p>
          </div>
          </div>

          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eos
            aliquam fugiat dicta dolor eaque accusantium, ab id delectus
            dignissimos velit eveniet minus at dolorem sint voluptas quos
            aperiam cum inventore ratione! Accusantium magni, dolorum ducimus
            quasi eum distinctio officiis.
          </p>
        </div>
      </div>
  );
};

export default HomePost;
