import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "./posts"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))

    const posts = markdownPosts.map((fileName: string) => {
        const content = fs.readFileSync(`posts/${fileName}`, 'utf8')
        const result = matter(content)
        return {
            title: result.data.title,
            date: result.data.date,
            description: result.data.description,
            draft: result.data.draft,
            slug: fileName.replace('.md', '')
        }
    })

    return posts
}

export default getPostMetadata