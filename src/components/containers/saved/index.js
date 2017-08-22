import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="Songs" >
      <div>
        <h2 style={styles.headline}>Songs</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>        
      </div>
    </Tab>
    <Tab label="Artists" >
      <div>
        <h2 style={styles.headline}>Artists</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="Albums"
      data-route="/home"
      onActive={handleActive}
    >
      <div>
        <h2 style={styles.headline}>Albums</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;