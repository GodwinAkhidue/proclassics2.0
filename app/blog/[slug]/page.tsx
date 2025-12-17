import api from "@/utils/api";
import Blog_Details from "./component";

export async function generateStaticParams() {
  const response = await api.get(`/api/blog/get-all-slugs`);
  const slugs = response.data.slugs;
  return slugs.map((slug: any) => ({
    slug: slug.slug,
  }));
}

export default async function Page({ params }: { params: any }) {
  const routeParams = await params;
  const slug = routeParams.slug;

  const res = await api.get(`/api/blog/get-one/${slug}`);
  const blog = res.data.blog;

  return <Blog_Details blog={blog} />;
}
