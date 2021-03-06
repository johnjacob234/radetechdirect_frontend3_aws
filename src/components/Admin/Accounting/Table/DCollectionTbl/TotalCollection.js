import React, { Component } from 'react'
import {Typography} from '@material-ui/core'
 class TotalCollection extends Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="subtitle1" style={{color:"white",textDecoration:"underlined",paddingRight:"20px"}}>Total Collection : <span style={{fontWeight:"bold"}}>&#8369;{(this.props.amount).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span> </Typography>
            </React.Fragment>
        )
    }
}

export default TotalCollection
