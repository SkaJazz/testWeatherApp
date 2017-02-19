var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
	return (
		<div>
			<h2>NAV Component</h2>
			<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Запрос погоды</IndexLink>
			<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>О сайте</Link>
			<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Примеры</Link>
		</div>
	);
}

module.exports = Nav;