import React from 'react';
import './App.css';

class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      newarr:[],
      wayarr:{}
    }

  }
  componentWillReceiveProps(newProps) {

    this.setState({
      station: newProps.data
    },()=>{
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
    let newarr=[];
    
    station.forEach((stationItem,index)=>{
      newarr[index]=[]
      stationItem.split('').map(x=>{
        if(x=='东'){
          newarr[index].push('E')
        }else if(x=='西'){
          newarr[index].push('W')
        }
        else if(x=='南'){
          newarr[index].push('S')
        }
        else if(x=='北'){
          newarr[index].push('N')
        }
        else if(x=='左'){
          newarr[index].push('L')
        }
        else if(x=='右'){
          newarr[index].push('R')
        }
        else if(x=='掉'){
          newarr[index].push('T')
        }
        else if(x=='直'){
          newarr[index].push('I')
        }
        else if(x=='非'){
          newarr[index].push('B')
        }
        else if(x=='人'){
          newarr[index].push('P')
        }
        else if(x=='二'){
          newarr[index].push('D')
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
  editWayarr=(newarr)=>{
    let wayarr={
      N:[],
      S:[],
      W:[],
      E:[]
    }
    newarr.forEach((x,index)=>{
      wayarr[x[0]].push(x[2])
  })
  this.editShow(wayarr)
  /* this.setState({
    wayarr
  },()=>{
    console.log(this.state.wayarr)
  }) */
  }
  merge=(arr,a,b,c)=>{

    
        let aaa='n';
        let bbb='n';
        arr.forEach((x,index)=>{
          if(aaa=='n'){
            if(x==a || x==b){
             
              aaa=index
               
            }
          }else{
            if(x==a || x==b){
    
              bbb=index
    
            }
          }
    
        })
    
        if(aaa!='n'&&bbb!='n'){
          arr = arr.filter((item,index) => index != aaa&&index != bbb)
           arr.push(c);         
        }
       
        return arr
    
      }
  editShow=(wayarr)=>{
    Object.keys(wayarr).forEach(x=>{
      wayarr[x]=this.merge(wayarr[x],'L','I','J')
    })
    console.log(wayarr)
  }
}

export default Trafficflash;
