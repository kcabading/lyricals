import React from 'react';
import CircularProgress from 'material-ui/CircularProgress'

const style = {    
    position: "absolute",
    top: "50%",
    left: "50%",
    margin: "-28px 0 0 -25px"
}

export default () => (
    <div className="loading-container" >
        <CircularProgress style={style}/>
    </div>
)   