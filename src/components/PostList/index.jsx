import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { Container } from './styles';
import { ButtonText } from '../ButtonText';

export function PostList() {
  const [posts, setPosts] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [comments, setComments] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 5;
  const pagesVisited = pageNumber * postsPerPage;
  const pageCount = Math.ceil(posts.length  / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);
  
  async function handlePostClick(post) {
    setShowComments(true);
    setSelectedPostId(post.id);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    const data = await response.json();
    setComments(data);
  }

  async function handleCloseComments() {
    setShowComments(false);
    setSelectedPostId(null);
    setComments([]);
  }

  return (
    <Container>
      <ul className="posts">
        {posts
          .slice(pagesVisited, pagesVisited + postsPerPage)
          .map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              {selectedPostId === post.id && showComments && (
                <ul className="comments">
                  {comments.map((comment) => (
                    <li key={comment.id}>
                      <h4>{comment.name}</h4>
                      <p>{comment.body}</p>
                    </li>
                  ))}
                </ul>
              )}

              <ButtonText
                title={selectedPostId === post.id && showComments ? "Fechar comentários" : "Ver comentários"}
                onClick={selectedPostId === post.id && showComments ? handleCloseComments : () => handlePostClick(post)}
              />

            </li>
        ))}
      </ul>
      
      <ReactPaginate
        previousLabel="Anterior"
        nextLabel="Próxima"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="pagination"
        previousLinkClassName="pagination-previous"
        nextLinkClassName="pagination-next"
        disabledClassName="pagination-disabled"
        activeClassName="pagination-active"
        pageLinkClassName="pagination-link"
        breakLinkClassName="pagination-ellipsis"
      />
    </Container>
  )
}