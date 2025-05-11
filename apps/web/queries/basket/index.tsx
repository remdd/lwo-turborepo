// @TODO - placeholder file for react-query data fetch & mutation hooks
// https://tanstack.com/query/latest/docs/framework/react/examples/nextjs?path=examples%2Freact%2Fnextjs%2Fsrc%2Fhooks%2FusePosts.ts

import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (limit = 10): Promise<Array<Post>> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data.filter((x: Post) => x.id <= limit);
};

const usePosts = (limit: number) => {
  return useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchPosts(limit),
  });
};

export { fetchPosts, usePosts };
