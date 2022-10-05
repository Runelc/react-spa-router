import parse from "html-react-parser";

export default function PostItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}

        <p> 
            {post.acf.website ? (
                <a href={post.acf.website} target="_blank"> 
                    Link til website
                </a>
            ) : ( 
                <p> Intet link</p>
            )}
        </p>
        </article>
    );
}