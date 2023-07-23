import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const Posts = () => {
    const postMetadata = getPostMetadata()
    const postPreviews = postMetadata.map((post) => (
        <article className="flex flex-col gap-1" key={post.slug}>
            <h1 className="text-xl font-bold hover:underline">
                <Link href={`/posts/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="text-gray-600">
                {post.description}
            </div>
            <div className="mt-2">
                <Link href={`/posts/${post.slug}`} className="inline-flex gap-2 text-sm font-semibold items-center text-emerald-700 hover:text-emerald-600">
                    Read This Article
                    <span className="w-4 h-4 stroke-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </article>
    ))

    return (
        <div>
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-extrabold">Latest Posts</h1>
                <p className="content text-lg text-gray-900">
                    See what I have written lately
                </p>
            </div>
            <section className="py-10 flex flex-col gap-10 ">
                {postPreviews}
            </section>
        </div>
    )
}

export default Posts