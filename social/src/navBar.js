import React from 'react';

export class Nav extends React.Component{
  render() {
    const pages = ['Home', 'About', 'Twitter', 'Instagram', 'Stats'];
    const navLinks = pages.map(page => {
      return (
        <li><a href={'./' + page}>
          {page}
        	</a>
        </li>	
      )
    });

    return <nav><ul>{navLinks}</ul></nav>;
  }
}