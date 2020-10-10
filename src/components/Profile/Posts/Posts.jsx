import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {

    let posts = [];
    for (let i = 0; i < 30; i++) {
        posts.push(<Post author="Ivan Ivanovchenkov" message="Nunc fermentum placerat varius. Proin iaculis ante in felis ornare eleifend. Nullam auctor quam pretium, volutpat nunc tincidunt, tincidunt tellus. Vivamus vel augue dapibus nisi condimentum gravida a vehicula mauris. Sed malesuada turpis vitae sapien scelerisque faucibus. Vestibulum quis vestibulum ante. In finibus consequat turpis in pulvinar. Integer eget aliquet augue, et efficitur sapien. Aliquam diam turpis, faucibus tincidunt porta et, dictum id erat. In nibh odio, lobortis eget erat vitae, cursus ultrices tortor. Sed quis risus lacus. Nullam pretium at quam a rutrum. In rhoncus euismod risus, a ullamcorper magna. Vestibulum vel enim at augue interdum mollis. Quisque mauris augue, commodo et nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis." likeCount="33" />);
    }

    return (
        <div className="posts">
            Profile posts
            <form>
                <textarea placeholder="What to do..." /><br />
                <button className="button-default">send</button>
            </form>
            {posts}


        </div>
    );
}

export default Posts;