
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./commentSlice";
import { Container,Row,Col } from "react-bootstrap";


const Comment = () => {
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <>
     <section style={{marginTop:"8%"}}>
    <Container fluid>
      <Row>
      <Col md={3} className='mt-5'>
      <h2 style={{fontWeight:"700"}}>Your Comments</h2>
      </Col>
      <Col>
     
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      
        {posts &&
          posts.slice(2,5).map((post) => {
            return (
              <Col md={9}style={{borderRadius:"8px",border:'solid black 3px',
                     marginTop:"2%",backgroundColor:"rgb(120, 196, 177)"}}  >

                <section style={{padding:"2%"}}>
                <article key={post.id} >
            
            <h3 style={{fontWeight:"700"}}>{post.title}:</h3>
            <p>{post.body}</p>
          </article>

                </section>
            
              </Col>
            );
          })}

       </Col>
  
      </Row>
    </Container>
    </section>
    </>
  );
};

export default Comment;