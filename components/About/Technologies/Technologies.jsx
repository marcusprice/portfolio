import styles from './Technologies.module.css';

export default function Technologies() {
  return (
    <div className={styles.container}>
      <h2>Technologies and Tools</h2>
      <p>
        I'm language-agnostic and that the tech you see below are the primary
        tools that I have picked up in my journey as a software engineer. When
        it comes to any kind of project, I'm most-interested in the best tools
        for the situation. I'm always open to learning about new and existing
        technologies and am constantly researching the best tools for my
        client's projects. In fact, I think that learning and improving my
        skills is my favorite part of being an engineer.
      </p>
      <h3>Cloud Hosting, Domains and CDN</h3>
      <ul>
        <li>
          <a
            href='https://digitalocean.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            DigitalOcean
          </a>{' '}
          is my go-to cloud hosting service. The admin interface is super easy
          and I love their predictable VPS pricing (including a reasonable
          option for $5/month)
        </li>
        <li>
          I use a few different domain name services depending on which one has
          the best cost. Generally I check Namecheap, godaddy, bluehost but
          often find the best prices with dreamhost
        </li>
      </ul>

      <h3>Backend and Databases</h3>
      <ul>
        <li>
          Nginx is a great web server and allows me to host several processes
          within one VPS instance. This is a great tool for hosting several
          applications on one domain or running a headless CMS on the same
          server as the frontend
        </li>
        <li>
          These days I often find myself writing application backends with
          Node.js and Express.js. Express makes it incredibly easy to manage
          HTTP requests, implement microservices and MVC architecure as well as
          REST APIs
        </li>
        <li>
          I am big on relational/SQL databases over nosql. I prefer to use
          PostegreSQL since it is open source, but have experience using MySQL
          as well
        </li>
      </ul>

      <h3>API Tools</h3>
      <ul>
        <li>Nginx, Node.js and Express</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h3>Frontend</h3>
      <ul>
        <li>Nginx, Node.js and Express</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <h3>Text Editor and Extensions</h3>
      <ul>
        <li>
          Visual Studio Code - this code editor might be the best thing
          Microsoft has ever made. The extensions available for it are great
        </li>
        <li>
          Prettier - this extention is a god-send. It keeps my code clean and
          consistent so I can focus more on the project without having to worry
          too much about code readability
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
