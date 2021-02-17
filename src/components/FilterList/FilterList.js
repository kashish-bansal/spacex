import React, { useEffect, useState } from 'react'
import Filter from '../Filter/Filter'
import { useDispatch } from 'react-redux';
import { addFilterToLaunches } from "../../redux/actions/launchActions";


const displayFlex = {
    display: 'flex',
    flexDirection: 'column'
}
const header = {
    fontSize: '20px',
    fontWeight: 'bold'
}
const heading = {
    textDecoration: 'underline',
    alignSelf: 'center',
    marginBottom: '15px',
    fontSize: '20px'
}
const filtersCls = {
    display: 'inline-block',
    flexFlow: 'wrap'
}
const filterList = {
    flex: 0.2,
    padding: '10px',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'flex-start',
    display: 'block'
}

function FilterList({query}) {
    const filters = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const dispatch = useDispatch();
    const [allFilters] = useState(new Map());
    useEffect(() => {
        let filters = [{name: 'limit', value: 100}];
        if(query) {
            let params = query.replace('?', '').split('&');
            params.map(param => {
                let keyVal = param.split('=');
                if(keyVal[0] !== 'limit')
                    filters.push({name: keyVal[0], value: keyVal[1]});
            });
        }
        dispatch(addFilterToLaunches(filters));
    }, []);
    return (
        <div style={filterList}>
            <h4><span style={header}>Filters</span></h4>
            <section style={displayFlex}>
                <span style={heading}>Launch Year</span>
                <div style={filtersCls}>
                    {filters.map(filter => <Filter key={filter} name="launch_year" value={filter} allFilters={allFilters}/>)}
                </div>
            </section>
            <section style={displayFlex}>
                <span style={heading}>Successful Launch</span>
                <div style={filtersCls}>
                    <Filter name="launch_success" value="true" allFilters={allFilters}/>
                    <Filter name="launch_success" value="false" allFilters={allFilters}/>
                </div>
            </section>
            <section style={displayFlex}>
                <span style={heading}>Successful Landing</span>
                <div style={filtersCls}>
                    <Filter name="land_success" value="true" allFilters={allFilters}/>
                    <Filter name="land_success" value="false" allFilters={allFilters}/>
                </div>
            </section>
            
        </div>
    )
}

export default FilterList

