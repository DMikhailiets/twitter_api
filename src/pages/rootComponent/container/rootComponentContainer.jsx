import React from 'react'
import RootComponent from '../component/rootComponent.jsx'
import { connect } from 'react-redux'
import { getData } from '../../../redux/reducers/simpleReducer'
import { fetchData } from '../../../redux/selectors'
import { useEffect, useState } from 'react'

const mapStateToProps = (state) => ({
    data: fetchData(state)
})

let RootContainer = ({data, getData}) => {
    useEffect(() => {
        if (!data) {
            // getData()
        }
    },[data, getData])
    return <RootComponent data={data} getData={getData}/>
}

export default connect(mapStateToProps, {getData})(RootContainer)