import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TCpt = ({ text, style, _t }) => <div style={style}>{_t(text)}</div>;

TCpt.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  _t: PropTypes.func.isRequired,
};

TCpt.defaultProps = {
  style: {},
};

const mapStateToProps = state => ({
  _t: text => state.persist.dictionnary[text] || text,
});

const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TCpt);
