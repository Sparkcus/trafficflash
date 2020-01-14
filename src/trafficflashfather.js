import React from 'react';

import './App.css';
import Trafficflash from './trafficflash'
import { Select } from 'antd';

const { Option } = Select;
const station = []
class Trafficflashfather extends React.Component {
  constructor(props){
    super(props);
    this.state={
     station:[]
    }
   
  }
  componentDidMount(){
   
  }
  render () {
   const{station}=this.state
    return (
      <div>
       
       
         <Select defaultValue="北向东左转" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="北向东左转"> 北向东左转</Option>
          <Option value="北向南直行"> 北向南直行</Option>
          <Option value="北向西右转"> 北向西右转</Option> 
          <Option value="北向南掉头"> 北向南掉头</Option>
          <Option value="北向南行人"> 北向南行人</Option>
          <Option value="北向南行一"> 北向南行一</Option>
          <Option value="北向南行二"> 北向南行二</Option>
          <Option value="北向南非机"> 北向南非机</Option>


          <Option value="东向南左转"> 东向南左转</Option>
          <Option value="东向西直行"> 东向西直行</Option>
          <Option value="东向北右转"> 东向北右转</Option>
          <Option value="东向西掉头"> 东向西掉头</Option>
          <Option value="东向西行人"> 东向西行人</Option>
          <Option value="东向西行一"> 东向西行一</Option>
          <Option value="东向西行二"> 东向西行二</Option>
          <Option value="东向西非机"> 东向西非机</Option>

          <Option value="南向西左转"> 南向西左转</Option>
          <Option value="南向北直行"> 南向北直行</Option>
          <Option value="南向东右转"> 南向东右转</Option>
          <Option value="南向北掉头"> 南向北掉头</Option>
          <Option value="南向北行人"> 南向北行人</Option>
          <Option value="南向北行一"> 南向北行一</Option>
          <Option value="南向北行二"> 南向北行二</Option>
          <Option value="南向北非机"> 南向北非机</Option>

          <Option value="西向北左转"> 西向北左转</Option>
          <Option value="西向东直行"> 西向东直行</Option>
          <Option value="西向南右转"> 西向南右转</Option>
          <Option value="西向东掉头"> 西向东掉头</Option>
          <Option value="西向东行人"> 西向东行人</Option>
          <Option value="西向东行一"> 西向东行一</Option>
          <Option value="西向东行二"> 西向东行二</Option>
          <Option value="西向东非机"> 西向东非机</Option>
        
        </Select> 
        <Trafficflash data={station}></Trafficflash>
      </div>
    ) 
  }
  handleChange=(value)=> {
    const{station}=this.state
    console.log(`selected ${value}`);
    station.push(value);
    this.setState({
      station
    })
  }
}

export default Trafficflashfather;
