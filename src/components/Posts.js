import Post from './Post'
// Function name matches file name
const Posts = () => {
    // return must have one parent element
        const more_posts = [
            {fav_color:"green", new_value:"Larry"},
            {fav_color:"pink", new_value:"Daryl"},
            {fav_color:"turquoise", new_value:"Darrell"}
        ]
    return (
        <section>
            Posts Comp
            <Post fav_color="orange" new_value="Patrice " />
            <Post fav_color="purple" new_value="Turkey " />
            {more_posts.map((post) => {
                return <Post fav_color={post.fav_color} new_value={post.new_value} />
            })}
        </section>
    )
}

// Makes it available for import
export default Posts;