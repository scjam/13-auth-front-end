import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const Privacy = ({ render: Component, ...rest }) => {
    return (
        <Route 
            {...rest}
            render={props => (rest.token 
                ? <Component {...props} {...rest} /> 
                : <Redirect to="/login" />
            )}
        />
    )
}

export default Privacy