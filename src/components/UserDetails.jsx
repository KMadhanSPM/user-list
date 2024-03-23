// src/UserDetails.js
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { username } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setUserDetails);
  }, [username]);

  if (!userDetails) return <Box>Loading...</Box>;

  const {
    avatar_url,
    name,
    login,
    location,
    company,
    blog,
    bio,
    followers,
    following,
    public_repos,
  } = userDetails;

  return (
    <Box sx={{ maxWidth: 600, m: "20px auto" }}>
      <Card>
        <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
          <Avatar
            src={avatar_url}
            alt={username}
            sx={{ width: 90, height: 90, mr: 2 }}
          />
          <Box>
            <Typography variant="h5">{name || login}</Typography>
            <Typography color="text.secondary">{location}</Typography>
            <Box mt={1}>
              {company && <Chip label={`Company: ${company}`} />}
              {blog && (
                <Chip label="Blog" component="a" href={blog} clickable />
              )}
            </Box>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="body2">{bio}</Typography>
          <Box mt={2} display="flex" justifyContent="space-around">
            <Typography variant="subtitle1">Followers: {followers}</Typography>
            <Typography variant="subtitle1">Following: {following}</Typography>
            <Typography variant="subtitle1">Repos: {public_repos}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default UserDetails;
