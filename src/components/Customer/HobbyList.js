import React, { Component, PropTypes } from 'react';

export default class HobbyList extends Component {
	render() {
		return (
		this.props.hobbies.length ?
		<div>
			<h4>Your Hobbies ({ this.props.hobbies.length || 0 })</h4>
			<ul className="list-group">
				{
					this.props.hobbies.map((hobby, idx) =>
						<li className="list-group-item" key={ idx }>{ hobby }</li>)
				}
			</ul>
		</div> :
		null
		);
	}
};

HobbyList.propTypes = {
  hobbies: PropTypes.array
};
