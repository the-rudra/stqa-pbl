"use client";
import { PageContainer } from "@features/layout";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Posts: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5000/3333",
    },
  ]);
  const callAPI = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts`, {
        method: "GET",
      });
      const data = await res.json();
      setPosts(data.posts);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const callImagesAPI = async () => {
    try {
      const res = await fetch(`https://picsum.photos/v2/list`, {
        method: "GET",
      });
      const data = await res.json();
      setImages(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI();
    callImagesAPI();
  }, []);
  const [start, setStart] = useState(0);
  return (
    <PageContainer title="Posts" info="Overview of all the posts">
      <div className="mt-2 grid grid-cols-3 justify-between gap-8">
        {posts.slice(start * 10, (start + 1) * 10).map((post, index) => (
          <div
            key={index}
            className="flex flex-col border-2 rounded-2xl overflow-hidden shadow-xl p-4 bg-white"
          >
            <div>
              <img src={images[index]?.download_url || ""} alt="" />
            </div>
            <div className="text-center mt-4 text-gray-500">
              {start * 10 + index + 1}
            </div>
            <div className="text-center text-2xl font-bold mt-8">
              {post.title}
            </div>
            <div className="mt-4">{post.body}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-8 mt-8">
        <button
          type="button"
          onClick={() => {
            setStart((prevStart) => prevStart - 1);
            window.scrollTo({
              top: 0,
              behavior: "auto",
            });
          }}
          className="border rounded-full p-2 px-3 bg-white"
        >
          {"<"}
        </button>
        <span className="py-2 font-bold">{start + 1}</span>
        <button
          type="button"
          onClick={() => {
            setStart((prevStart) => prevStart + 1);
            window.scrollTo({
              top: 0,
              behavior: "auto",
            });
          }}
          className="border rounded-full p-2 px-3 bg-white"
        >
          {">"}
        </button>
      </div>
    </PageContainer>
  );
};

export default Posts;
