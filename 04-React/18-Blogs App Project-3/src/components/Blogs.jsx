import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className="w-11/12 py-3 max-w-[550px] flex flex-col gap-y-9 mt-13 mb-16">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p className="font-bold text-xl">{post.title}</p>
              <p className="text-sm mt-0.5">
                By <span>{post.author}</span> on {' '} <span className="underline font-bold">{post.category}
                </span>{" "}
              </p>
              <p className="text-sm mt-0.5">
                Posted On <span>{post.date}</span>
              </p>
              <p className="text-md mt-2">{post.content}</p>

              <div className="flex gap-x-2 mt-0.5">
                {post.tags.map((tag, index) => {
                  return (
                    <span
                      className="text-blue-700 underline font-bold text-xs"
                      key={index}
                    >{` #${tag}`}</span>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
export default Blogs;
