import { default as RootComponent } from '../component/rootComponent'
import React, { useEffect } from 'react'
import { getData } from '../../../redux/asyncActions.ts'
import { fetchData } from '../../../redux/selectors'
import { useSelector, useDispatch } from 'react-redux'


let RootContainer = () => {
  const dispatch = useDispatch()
  const data = useSelector(fetchData)

  useEffect(() => {
    if (!data) {
      //getData()
    }
  },[data, getData])
  return <RootComponent data={data} getData={() => dispatch(getData())}/>
}

export default RootContainer