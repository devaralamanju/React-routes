import { useLocation, useParams } from "react-router-dom";

function About() {
    let { id, name } = useParams();
    let queryParams = useLocation();

    // Parse query parameters
    let queryParamsObj = new URLSearchParams(queryParams.search);
    let category = queryParamsObj.get('category');
    let posts = queryParamsObj.get('posts');

    return (
        <>
            <p>User id: {id}</p>
            <p>Category: {category}</p>
            <p>Posts: {posts}</p>
            <h1>This is About page</h1>
        </>
    );
}

export default About;
