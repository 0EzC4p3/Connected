import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { Container, Avatar, TextField, Button } from '@mui/material/'
import { deepOrange } from '@mui/material/colors'


// useEffect(() => {
//   axios.get('http://localhost:3000/api/v1/posts')
//     .then(response => {
//       console.log(response)
//       setPosts(response.data)
//     })
//     .catch(error => console.log(error))
// }, []);

const Create = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/posts')
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <Container>
      {/* {posts.map((post) => (
          <div className="tile" key={post.id} >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        )
      )} */}
      <br />
      <Avatar style={{ background: deepOrange[500] }}>DM</Avatar>
      <br />
      <TextField id="name" label="Name" variant="outlined" autoComplete="off" />
      <br />
      <br />
      <Button color="primary" variant="contained"> Submit Now </Button>
    </Container>
  );
}

export default Create