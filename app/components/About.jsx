var React = require('react');

// var About = React.createClass(
//   {
//     render: function()
//       {
//         return(
//           <h3>About Component</h3>
//         )
//       }
//     }
// );

var About = (props) =>
{
    return(

       <div>
         <h1 className="text-center page-title">About</h1>
         <p>This is a weather application built on React. I have built this
           for the complete React web developer course</p>
         <p>
           Here are some of the tools i used:
         </p>
         <ul>
           <li>
             <a href="https://facebook.github.io/react">React</a>  - This was the Javascript framework used
           </li>
           <li>
             <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search weather data by city
           </li>
         </ul>
       </div>

      )
};

module.exports = About;
