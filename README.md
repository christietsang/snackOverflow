<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]


<!-- PROJECT INFO -->
<br />
<div align="center">
  <img src="frontend\src\assets\favicon.png"alt="snacks" width="90" height="90">

  <h1 align="center"">snackOverflow</h1>

  <p align="center">
    Get to know your colleagues while swapping and sharing snacks!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br>

<!-- ABOUT THE PROJECT -->
## About The Project
snackOverflow is a web application that helps people who are returning to the office make new friendships and connections over a shared meal.  Users can swap and share their food, and can leave anonymous comments on other people's posts to let them know they are interested in sharing their snack.
                                  
Developed in a day and a half for SAP's 2022 Hackathon.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
<h3 id="installation">Installation</h3>

1. Clone the repo
   ```sh
   git clone https://github.com/christietsang/snackOverflow
   ```
2. Create a .env file in the folder `backend` with the information:
    ```html
    NODE_ENV=development
    MONGO_DATABASE_URL=<your_mongoDB_url_here>
    SECRET=<your_json_web_token_here>
    ```
3. Install dependencies
4. Move inside the `backend` directory and start the server
    ```
    npm start run
    ```
5. In a different terminal, move inside the `frontend` directory and start the server
    ```
    npm start run
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [X] Users can create posts for their snacks
- [X] Data for posts persists to the database
- [X] Develop front end framework to display data
- [X] Implement comments section for each post
- [ ] Refresh frontend for better UX/UI
- [ ] Implement authentication system
- [ ] Add notifications for when users receive a comment on their post
- [ ] Allow users to have a personal wishlist


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<h3>Bosco Chan</h3>

[![LinkedIn][linkedin-shield]][linkedin-urlBC]
<br>

<h3>Christie Tsang</h3>

[![LinkedIn][linkedin-shield]][linkedin-urlCT]
<br>

<h3>Belal Kourkmas</h3>

[![LinkedIn][linkedin-shield]][linkedin-urlBK]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
# Acknowledgments

* [Markdown Guide](https://www.markdownguide.org/basic-syntax/#reference-style-links)
* [Tutorial on MERN stack](https://www.youtube.com/playlist?list=PL0Zuz27SZ-6P4dQUsoDatjEGpmBpcOW8V)
* [React Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/christietsang/snackOverflow.svg?style=for-the-badge
[contributors-url]: https://github.com/christietsang/snackOverflow/graphs/contributors


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-urlCT]: https://www.linkedin.com/in/christietsang/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-urlBK]: https://www.linkedin.com/in/belal-kourkmas/

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-urlBC]: https://www.linkedin.com/in/boscochw/


[product-screenshot]: images/mainmenu.png
