import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

import Post from "../../data/types/post";
import mockPosts from "../../data/mock/posts";
import React from "react";

export default function Posts() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setPosts(mockPosts());
    }, 2000);
  }, []);

  const router = useRouter();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <h1>Список постов</h1>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((post) => (
            <div className="col" key={post.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-subtitle text-muted">{`${post.date}`}</p>
                  <p className="card-text">{post.content}</p>
                  <div className="mt-auto">
                    <a
                      className="btn btn-primary"
                      onClick={() => router.push(`/posts/${post.id}`)}
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
