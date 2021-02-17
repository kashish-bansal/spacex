import React from 'react'
import FileList from "../FilterList/FilterList";
import LaunchSites from "../LaunchSites/LaunchSites";
import { connect } from "react-redux";
import * as launchActions from "../../redux/actions/launchActions";
import { bindActionCreators } from "redux";
import styled from 'styled-components'

const heading = {
  fontWeight: 'bold',
  fontSize: '20px',
  padding: '20px 0 20px 0'
}
const header = {
  display: 'flex',
  alignItems: 'left'
}

const StyledSection = styled.section`
  @media only screen and (min-width: 1441px) {
    display: flex;
  };
  @media only screen and (max-width: 1440px) {
    display: flex;
  };
  @media only screen and (max-width: 1024px) {
    display: flex;
  };
  @media only screen and (max-width: 700px) {
    display: block;
  };`

function Dashboard({launches, location}) {
    return (
      <main>
          <div style={header}><span style={heading}>SpaceX Launch Programs</span></div>
          <StyledSection>
            <FileList query={location.search}/>
            <LaunchSites launches={launches}/>
          </StyledSection>
      </main>
    )
}
function mapStateToProps(state) {
  return {
    launches: state.launches.launches
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLaunches: bindActionCreators(launchActions.loadLaunches, dispatch)
    }
  };
 }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
