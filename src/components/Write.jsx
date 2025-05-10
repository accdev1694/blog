import Heading from "./Heading";

const Write = () => {
  return (
    <div className="">
      <Heading title="Create a Post" />
      <form className="mx-36 flex items-center flex-col gap-8 mt-8">
        {/* Post Title */}
        <div className="flex w-full flex-col gap-2">
          <label className="font-bold" for="title">Title:</label>
          <input
            className="flex items-center p-2 bg-blue-900/20 placeholder:text-blue-600/50 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="title"
            placeholder="Ai in Everything"
            name="title"
            // value=""
          />
        </div>
        {/* Post content */}
        <div className="w-full gap-2 flex flex-col">
          <label className="  font-bold" for="content">Content:</label>
          <textarea className="h-50 p-2 bg-blue-900/20 placeholder:text-blue-600/50 border border-blue-500/50 focus:outline-none focus:bg-blue-900/10"
            type="text"
            id="content"
            placeholder="Is Ai really taking our jobs? In my opinion . . ."
            name="content"
            // value=""
          ></textarea>
        </div>
        <button className="opacity-90 hover:opacity-100 transition duration-300 ease-in-out bg-accent py-3 w-full text-secondary font-bold">SUBMIT POST</button>
      </form>
    </div>
  );
};

export default Write;
