import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/vendor/colorlib404.css';

const ClientError = () => (
  <>
  {/*  */}
	<link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet" />
		  
	<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>we are sorry, but the page you requested was not found<br />
      <Link to='/' className='nav-link'> back to home</Link>
      </h2>
		</div>
	</div>

  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

</>

);

export default ClientError;
