import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import BlogDetail from "../../components/BlogDetail";
import NewsDetails from "../../components/NewsDetails";
import axios from "axios";

const Post = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  var slug;
  slug = router.query.slug;
  console.log("client ", slug);

  useEffect(() => {
    getBlogDetails(slug);
  }, [slug]);
  const getBlogDetails = async (slug) => {
    const response = await axios.get(`/api/blogs/${slug}`);
    const [res] = await response.data;
    setData(res);
    console.log(res);
  };

  return (
    <>
      {data ? (
        <BlogDetail
          Photo={data.Photo}
          title={data.blogTitle}
          content={data.blogContent}
        />
      ) : (
        <h1>loading.....</h1>
      )}
      {/* <NewsDetails /> */}
    </>
  );
};

export default Post;
