export const load = async ({ fetch }) => {
    const postRes = await fetch('https://dummyjson.com/posts?limit=10')
    const postData = await postRes.json();
    const post = postData.posts;

    return {
        posts: post
    }
}