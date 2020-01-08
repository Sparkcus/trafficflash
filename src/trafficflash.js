import React from 'react';
import './App.css';

class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      newarr: [],
      wayarr: {}
    }

  }
  componentWillReceiveProps(newProps) {

    this.setState({
      station: newProps.data
    }, () => {
      this.dataRemix()
    })

  }
  componentDidMount() {

  }
  render() {
    const { station } = this.state
    return (
      <div>
        {station.toString()}
      </div>
    )
  }
  dataRemix = () => {
    const { station } = this.state;
    let newarr = [];

    station.forEach((stationItem, index) => {
      newarr[index] = []
      stationItem.split('').map(x => {
        if (x == '东') {
          newarr[index].push('E')
        } else if (x == '西') {
          newarr[index].push('W')
        }
        else if (x == '南') {
          newarr[index].push('S')
        }
        else if (x == '北') {
          newarr[index].push('N')
        }
        else if (x == '左') {
          newarr[index].push('L')
        }
        else if (x == '右') {
          newarr[index].push('R')
        }
        else if (x == '掉') {
          newarr[index].push('T')
        }
        else if (x == '直') {
          newarr[index].push('I')
        }
        else if (x == '非') {
          newarr[index].push('B')
        }
        else if (x == '人') {
          newarr[index].push('P')
        }
        else if (x == '一') {
          newarr[index].push('1')
        }
        else if (x == '二') {
          newarr[index].push('2')
        }
      })
    })
    this.editWayarr(newarr)

    /* this.setState({
      newarr
    },()=>{
      console.log(this.state.newarr)
    }) */

  }
  editWayarr = (newarr) => {
    let wayarr = {
      N: {arrows:[],else:[]},
      S: {arrows:[],else:[]},
      W: {arrows:[],else:[]},
      E: {arrows:[],else:[]},
    }
    newarr.forEach((x, index) => {
      if(x[2]=='L'||x[2]=='I'||x[2]=='R'||x[2]=='T'){
        if(wayarr[x[0]].arrows.indexOf(x[2])==-1){
            wayarr[x[0]].arrows.push(x[2])
        }
       
      }else{
        if(wayarr[x[0]].else.indexOf(x[2])==-1){
        wayarr[x[0]].else.push(x[2])
        }
      }
      
    })
    Object.keys(wayarr).forEach(x => {
      wayarr[x].arrows.sort()
      wayarr[x].else.sort()
    })
    //this.editShow(wayarr)
     this.setState({
      wayarr
    },()=>{
      console.log(this.state.wayarr)
    }) 
  }
  
  
}

export default Trafficflash;
