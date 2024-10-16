import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockPosts from '../../data/mock/posts';
import mockUsers from '../../data/mock/users';

function PostDetails() {
  const router = useRouter();
  const { id } = router.query;
  const post = mockPosts().find((post) => post.id === Number(id));
  if (!post) {
    return <p>404 - Post not found</p>;
  }
  const author = mockUsers().find((user) => user.id === post.authorId);

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h5 className="card-title">{post.title}</h5>
          <button className="btn btn-secondary" onClick={() => router.back()}>
            Back
          </button>
        </div>
        <div className="card-body">
          <p className="card-text">{post.content}</p>
          <p className="card-text">
            <small className="text-muted">
              Posted by {author?.name} on {post.date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;