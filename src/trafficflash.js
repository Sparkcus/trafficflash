import React from 'react';
import './App.css';
const img_arr = {
  T: ('./img/T.svg'),
  R:require('./img/R.svg'),
  P:require('./img/P.svg'),
  D:require('./img/D.svg'),
  I  : require('./img/I.svg'),
  IL : require('./img/IL.svg'),
  ILR: require('./img/ILR.svg'),
  ILT: require('./img/ILT.svg'),
  IR : require('./img/IR.svg'),
  IT : require('./img/IT.svg'),
  L  : require('./img/L.svg'),
  LR : require('./img/LR.svg'),
  LT : require('./img/LT.svg')
}
class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      newarr: [],
      wayarr: {
        N: {arrows:[],else:[]},
        S: {arrows:[],else:[]},
        W: {arrows:[],else:[]},
        E: {arrows:[],else:[]},
      }
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
    const { station,wayarr } = this.state
    const aaa='R'
    return (
      <div>
        {station.toString()}
        <div style={{width:'300px',height:'300px',border:'2px solid #fff',position:'relative'}}>
          <img  className={'arrows-n'} src={img_arr[wayarr.N.arrows.join('')]}/>
          <img  className={'arrows-s'} src={img_arr[wayarr.S.arrows.join('')]}/>
          <img  className={'arrows-e'} src={img_arr[wayarr.E.arrows.join('')]}/>
          <img  className={'arrows-w'} src={img_arr[wayarr.W.arrows.join('')]}/>
        </div>
        
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
      console.log(this.state.wayarr.N.arrows.toString())
    }) 
  }
  
  
}

export default Trafficflash;
