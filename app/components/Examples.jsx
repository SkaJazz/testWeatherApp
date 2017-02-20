var React = require('react');
var {Link, IndexLink} = require('react-router');

var Examples = () => {
		return (
			<div>
				<h1 className="text-center">Examples</h1>
				<p>Несколько мест, погоду в которых можно узнать:</p>
				<ul>
				  <li><Link to="/?location=Petrozavodsk">Петрозаводск, Карелия</Link></li>
				  <li><Link to="/?location=New-York">Нью-Йорк, США</Link></li>
				</ul>
			</div>
		);
}

module.exports = Examples;