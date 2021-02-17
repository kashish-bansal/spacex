import React from 'react'
import Mission from '../Mission/Mission'

const launchSites = {
    flex: 0.8,
    backgroundColor: '#f2f2f2'
  }

  
function LaunchSites({launches}) {
    return (
        <div style={launchSites}>
            {launches.map(mission => <Mission key={mission.flight_number} mission={mission} />)}
        </div>
    )
}

export default LaunchSites
