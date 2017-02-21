var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
          <p>This is a weather application built on react. I am creating this within the Udacity course.</p>
            <p>Here are some tools I've used</p>
            <ul>
              <li>
                <a href="https://facebook.github.io/rect">React</a> - This is React suckas
              </li>
            </ul>
      </div>
    );
  }

module.exports = About;
