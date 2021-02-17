import React from 'react'
import styled from 'styled-components'

const imgClass = {
    alignSelf: 'center',
    width: '100px',
    height: '100px',
  }
const fontBold = {
    fontWeight: 'bold',
  }
const StyledDiv = styled.div`
    background-color: white;
    padding: 17px;
    display: inline-flex;
    flex-direction: column;
    @media only screen and (min-width: 1441px) {
        min-width: 18%;
        align-items: center;
        margin: 0 10px 10px 10px;
    };
    @media only screen and (max-width: 1440px) {
        min-width: 18%;
        align-items: center;
        margin: 0 10px 10px 10px;
    };
    @media only screen and (max-width: 1024px) {
        min-width: 38%;
        align-items: center;
    };
    @media only screen and (max-width: 700px) {
        margin-top: 10px;
        height: 100%;
        min-width: 50%;
        align-items: center;
    };`;
  
function Mission({mission}) {
    const success = mission.launch_success ? mission.launch_success.toString() : 'false';
    return (
        <StyledDiv>
            <img alt={mission.mission_name} style={imgClass} src={mission.links.mission_patch_small}/>
            <span style={fontBold}><h5>{mission.mission_name}</h5></span>
            <div><span style={fontBold}>Rocket Name: </span><span>{mission.rocket.rocket_name}</span></div>
            <div><span style={fontBold}>Launch Year: </span><span>{mission.launch_year}</span></div>
            <div><span style={fontBold}>Successful Launch: </span><span>{success}</span></div>
            <div><span style={fontBold}>Landing Site: </span><span>{mission.launch_site.site_name}</span></div>
        </StyledDiv>
    )
}

export default Mission
