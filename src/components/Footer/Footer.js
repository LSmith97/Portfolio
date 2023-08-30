import "./Footer.css"

function Footer(props) {
    return (
      <footer>
        <h2>Connect with me:</h2>
        <div className="flex-container">
          <a href="https://www.linkedin.com/in/lilliana-r-smith/">
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" alt=""/>
            LinkedIn
          </a>
          <a href="https://github.com/LSmith97">
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-1024.png" alt=""/>
            GitHub
          </a>
        </div>
      </footer>
      
    );
  }
  
  export default Footer;
  
  