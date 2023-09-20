import { Post } from "@prisma/client";
import db from "../database/database";

export type CreatePost = Omit<Post, "id">;

async function getPosts() {
  const posts: Post[] = await db.post.findMany();

  return posts;
}

async function getPost(id: number) {
  const post: Post = await db.post.findFirst({
    where: { id },
  });
  return post;
}

async function createPost(post: CreatePost) {
  const { username, title, content } = post;
  await db.post.create({
    data: {
      username,
      title,
      content,
    },
  });
}

async function deletePost(id: number) {
  await db.post.delete({
    where: { id },
  });
}

const postRepository = {
  getPost,
  getPosts,
  createPost,
  deletePost,
};

export default postRepository;
