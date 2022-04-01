import { Avatar, Card, Typography, Grid, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getUsers } from './API';

const Posts = () => {
  const [postData, setPostData] = useState([]);
  useEffect(async () => {
    const data = await getUsers();
    if (data && data.posts) setPostData(data.posts);
  }, []);
  return (
    <Container>
      <Card>
        <Grid container spacing={2}>
          {postData &&
            postData.map(el => (
              <Grid item sm={12} xs={12} md={6} lg={4} key={el.id}>
                <Card style={{ padding: 10 }}>
                  <Typography display="inline">
                    Id: {el.id}
                    <Avatar src={el.avatar} />
                  </Typography>
                  <Typography>FirstName: {el.firstName}</Typography>
                  <Typography>LastName: {el.lastName}</Typography>
                  <Typography>Writeup: {el.writeup}</Typography>
                  <img src={el.image} alt="userImg" width={100} height={100} />
                </Card>
              </Grid>
            ))}
        </Grid>
      </Card>
    </Container>
  );
};

export default Posts;
