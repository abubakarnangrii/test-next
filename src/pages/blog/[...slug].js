import React from "react";
import { useRouter } from "next/router"; // Next.js 13 routing
import { usePathname, useParams } from "next/navigation"; // Next.js 14 routing
{
  /* in this case, we are using slug that can take one or more values as an
 array of strings or a single string value as a parameter in the URL path
 of the blog post page to demonstrate the difference between Next.js 13 and
 Next.js 14 routing in the BlogPost component.
 */
}
const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const pathname = router.pathname; // Next.js 13 pathname

  const pathname2 = usePathname(); // Next.js 14 pathname
  const params = useParams();
  const ID = params?.slug;

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1>The Blog Post</h1>
      <h1>
        ID:{" "}
        {Array.isArray(slug) ? (
          slug.map((value) => <p key={value}>{value}</p>)
        ) : (
          <p>{slug}</p>
        )}
        {" --------------> Next.js 13 "}
      </h1>
      <h1>
        ID:{" "}
        {Array.isArray(ID) ? (
          ID.map((value) => <p key={value}>{value}</p>)
        ) : (
          <p>{ID}</p>
        )}
        {" --------------> Next.js 14 "}
      </h1>

      <h1>
        Pathname: {pathname} {" --------------> Next.js 13 "}
      </h1>
      <h1>
        Pathname: {pathname2} {" --------------> Next.js 14 "}
      </h1>
    </div>
  );
};

export default BlogPost;
