import times from 'lodash/times';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

function DemoSidebarContent() {
	function generate(element) {
		return times(value =>
			React.cloneElement(element, {
				key: value
			})
		);
	}

	return (
		<div>
			<List dense>
				{generate(
					<ListItem button>
						<ListItemText primary="Single-line item" />
					</ListItem>
				)}
			</List>
		</div>
	);
}

export default React.memo(DemoSidebarContent);
