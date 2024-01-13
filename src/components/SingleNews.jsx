import React from "react";

const SingleNews = ({ currElem }) => {
  
  const { title, description, urlToImage, url } = currElem;

  const dummyText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum unde voluptatem mollitia in pariatur. Ipsa tenetur deserunt aliquid distinctio, ratione fugit tempore aperiam ullam debitis natus fugiat aut magni odio.";

  return (
    <div className="single-news">
      <img
        src={urlToImage ? urlToImage : "https://placehold.co/600x400"}
        alt={title}
      />
      <div className="single-news-content">
        <h4 className="single-news-title">
          {`${title.slice(0, 50)}${title.length > 50 ? "..." : ""}`}
        </h4>
        {description && (
          <p className="single-news-desc">
            {`${description.slice(0, 90)}${
              description.length > 90 ? "..." : ""
            }`}
          </p>
        )}
        {url && (
          <a
            className="read-more-btn"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleNews;
