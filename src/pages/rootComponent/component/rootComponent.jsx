import React from 'react'
import { Row, Input } from 'antd'
import styles from './rootComponent.module.css'
import { Items } from '../../../components'

const { Search } = Input;

const RootComponent = ({data, getData}) =>{
    return (
        <Rowadd>
            <div className={styles.wrapper}>
                <h1>Twitter champions 🦸🏻‍♂️</h1>
                <span>Find the best people to follow on any topic. Based on value, not followers.</span>
                <br/>
                <Search placeholder="input search text" onSearch={getData} enterButton style={{maxWidth: '30vw'}}/>
                <Items items={data}/>
            </div>
        </Rowadd>    
    )
}

export default RootComponent