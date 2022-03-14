import PropTypes from 'prop-types';

const TabTitle = (pageTitle) => {
	return (document.title = pageTitle);
};

TabTitle.propTypes = {
	pageTitle: PropTypes.string.isRequired,
};

export default TabTitle;
