import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { addFilterToLaunches } from "../../redux/actions/launchActions";

const filterCss = {
    backgroundColor: '#c5e09a',
  height: '20px',
  padding: '2px',
  borderRadius: '10px',
  fontSize: '14px',
  margin: '9px',
  display: 'inline-block',
  width: '33%',
  textAlign: 'center',
  cursor: 'pointer',
}

function Filter({ name, value, allFilters}) {
    
    const dispatch = useDispatch();
    const clicked = name => {
        let filter = [];
        allFilters.set(name, value);
        allFilters.forEach((value, key ) => {
            filter.push({name: key, value: value})
        });
        dispatch(addFilterToLaunches(filter));
    }
    return (
        <span onClick={clicked.bind(this,name)} style={filterCss}>{value}</span>
    )
}

function mapStateToProps(state) {
    return {
        filters: state.launches.filters
    };
}

export default connect(mapStateToProps)(Filter);

