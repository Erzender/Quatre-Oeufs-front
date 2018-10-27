import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TCpt = ({ text, style }) => <div style={style}>{text}</div>;

TCpt.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

TCpt.defaultProps = {
  style: {},
};

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TCpt);
