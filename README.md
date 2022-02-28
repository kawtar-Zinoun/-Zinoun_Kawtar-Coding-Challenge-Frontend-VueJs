<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">


  <h3 align="center">YouCan Frontend Coding Challenge</h3>

  <p align="center">
    A simple project made with VueJs and the Github Rest Api V3 
    <br />
  
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This project is a coding challenge from the YouCan team to test candidats skills, way of thinking and abilities to follow instructions, write clean code, and be productive.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com)
* [Github Rest Api V3](https://docs.github.com/en/rest)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

  * Vue Cli
  ```sh
  npm install -g @vue/cli
  ```

### Installation

1. Create a new Oauth App to get a client ID  [https://github.com/settings/developers](https://github.com/settings/developers)
2. Clone the repo
   ```sh
   git clone https://github.com/kawtar-Zinoun/Zinoun_Kawtar-Coding-Challenge-Frontend-VueJs.git
   ```
3. Clone the GateKeeper repo to send POST requests to the Github Api
    ```sh
   git clone https://github.com/prose/gatekeeper.git
   ```
   
4. Install NPM packages in both projects
   ```sh
   npm install
   ```
5. In the gateKeeper main folder, Enter your client ID and your client Secret provided by Github in the `config.json` file
   ```js
   "oauth_client_id": "YOUR_CLIENT_ID", 
   "oauth_client_secret": "YOUR_CLIENT_SECRET",
   ```
   
6. Run GateKeeper
   ```sh
   npm start 
   ```
6. All done! Now run the coding challenge
   ```sh
   npm serve
   ```
<p align="right">(<a href="#top">back to top</a>)</p>
