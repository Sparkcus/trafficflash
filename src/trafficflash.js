import React from 'react';
import './App.css';
const img_arr = {
  T:require('./img/T.svg'),
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
  LT : require('./img/LT.svg'),
  Q : require('./img/Q.svg'),
  A : require('./img/A.svg'),
  AQ : require('./img/AQ.svg')
}
class Trafficflash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      newarr: [],
      wayarr: {
        N: {arrows:[],people:[]},
        S: {arrows:[],people:[]},
        W: {arrows:[],people:[]},
        E: {arrows:[],people:[]},
        NE:{arrows:[],people:[]},
        SE:{arrows:[],people:[]},
        SW:{arrows:[],people:[]},
        NW:{arrows:[],people:[]},
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
        <div style={{width:'300px',height:'300px',border:'2px solid #fff',position:'fixed',top:'26%',left:'40%',overflow:'hidden'}}>
          <img  className={'arrows-n'} src={img_arr[wayarr.N.arrows.join('')]}/>
          <img  className={'arrows-s'} src={img_arr[wayarr.S.arrows.join('')]}/>
          <img  className={'arrows-e'} src={img_arr[wayarr.E.arrows.join('')]}/>
          <img  className={'arrows-w'} src={img_arr[wayarr.W.arrows.join('')]}/>
          <img  className={'people-n-p'} src={img_arr[wayarr.N.people.join('')]}/>
          <img  className={'people-s-p'} src={img_arr[wayarr.S.people.join('')]}/>
          <img  className={'people-w-p'} src={img_arr[wayarr.W.people.join('')]}/>
          <img  className={'people-e-p'} src={img_arr[wayarr.E.people.join('')]}/>
        </div>
        
      </div>
    )
  }
  setArrows = (arrows) =>{
    switch (arrows){
      case '左转':return 'L';break;
      case '直行':return 'I';break;
      case '右转':return 'R';break;
      case '掉头':return 'T';break;
      default:return '';break;
   
    }
  }
  setPeople = (people) =>{
    switch (people){

      case '行人':return 'P';break;
      case '行一':return 'Q';break;
      case '行二':return 'A';break;
      case '非机':return 'B';break;
      default:return '';break;
   
    }
  }
  setDerection = (derection) =>{
    if(derection.indexOf('向')!=-1){
      switch (derection[0]){
        case '东':return 'E';break;
        case '南':return 'S';break;
        case '西':return 'W';break;
        case '北':return 'N';break;
        default:return '';break;
      }
    }else{
      switch (derection){
        case '东':return 'E';break;
        case '东北':return 'NE';break;
        case '东南':return 'SE';break;
        case '南':return 'S';break;
        case '西':return 'W';break;
        case '西南':return 'SW';break;
        case '西北':return 'NW';break;
        case '北':return 'N';break;
        default:return '';break;
      }
    }
    
  }

  dataRemix = () => {
    const { station } = this.state;
    let newarr = [];
    let setArrows = this.setArrows
    let setDerection = this.setDerection
    let setPeople = this.setPeople
    station.forEach((stationItem, index) => {
      newarr[index] = []
      newarr[index].arrows = setArrows(stationItem.slice(-2));
      newarr[index].people = setPeople(stationItem.slice(-2));
      newarr[index].derection = setDerection(stationItem.slice(0,-2));
      //console.log(newarr)
    })
    this.editWayarr(newarr)
  }

  editWayarr = (newarr) => {
    let wayarr = {
      N: {arrows:[],people:[]},
      S: {arrows:[],people:[]},
      W: {arrows:[],people:[]},
      E: {arrows:[],people:[]},
      NE:{arrows:[],people:[]},
      SE:{arrows:[],people:[]},
      SW:{arrows:[],people:[]},
      NW:{arrows:[],people:[]},
    }
    newarr.forEach((x, index) => {
      if(x.arrows){
        wayarr[x.derection].arrows.push(x.arrows)
      }
      if(x.people){
        wayarr[x.derection].people.push(x.people)
      }
      
    })
    Object.keys(wayarr).forEach(x => {
      wayarr[x].arrows.sort()
      wayarr[x].people.sort()
    })
     this.setState({
      wayarr
    },()=>{
      console.log(this.state.wayarr)
    }) 
  }
  
  
}

export default Trafficflash;
