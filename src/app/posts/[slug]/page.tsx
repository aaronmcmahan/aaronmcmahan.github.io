import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "@/components/getPostMetadata"

const getPostContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf8")
    return matter(content)
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <article className="flex flex-col gap-10">
            <header className="flex flex-col gap-2">
                <h2 className="text-4xl leading-snug font-bold text-gray-900">
                    {post.data.title}
                </h2>
                <div className="text-sm font-semibold text-gray-500 flex gap-3">
                    <time dateTime={post.data.date} title={post.data.date}>
                        {new Date(post.data.date).toDateString()}
                    </time>
                </div>
            </header>
            <section className="content text-lg text-gray-800">
                <Markdown>{post.content}</Markdown>
            </section>
        </article>
    )
}

export default PostPage