# Backend


## API Routes

### Authentication
```
Registration
POST /api/auth/register

body: {
  nickname: String;
  email: String
  password: String,
}
Returns user data and access token
```

```
Sign-in
POST /api/auth/signin

body: {
  email: String
  password: String,
}

Returns user data and access token
```


### User
```
Get user info
GET /api/getUserInfo

Header: x-access-token: <your_token>

Returns user object
```


### Snack Post
```
Get available posts
GET /api/posts/availablePosts

header: x-access-token: <your_token>

Returns a list of available posts
```

```
Create a post
POST /api/posts/create

header: x-access-token: <your_token>
body: {
  title: String;
  description: String
  closingTime: DateTime,
  postImages: [ File<image> ]
}

Create a post for the user and returns the newly created post
```

```
Get posts by current user
GET /api/posts/byCurrentUser

header: x-access-token: <your_token>

Returns a list of posts created by the user
```

```
Edit a post 
PUT /api/posts/editPost/:postId

header: x-access-token: <your_token>
body: {
  title?: String;
  description?: String
  closingTime?: DateTime,
}

Returns the updated post
```


### Comment 
```
Get comments belonging to a post
GET /api/comments/commentsByPost/:postId

header: x-access-token: <your_token>

Returns a list of comments belonging to the post
```

```
Create a comment
POST /api/comments/create/:postId

header: x-access-token: <your_token>
body: {
  message: String;
}

Creates a comment for the post and returns the comment object
```