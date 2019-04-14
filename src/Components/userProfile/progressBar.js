import React from "react";

class ProgressBarComponent extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        percentage: 20
      }
      this.nextStep = this.nextStep.bind(this)
    }

    componentDidMount() {
      setTimeout(() => this.setState({
        percentage: 40,
      }), 500);
    }
    
    nextStep() {
      if(this.state.percentage === 100) return 
      this.setState({ percentage: this.state.percentage + 20 })
    }
    
    render() {
      return (
        <div>
          <ProgressBar percentage={this.state.percentage} />
        </div>
      )
    }  
  }
  
  const ProgressBar = (props) => {
    return (
        <div  style={{ position: "relative",
            height: 20,
            width: 350,
            borderRadius: 50,
            border: "1px solid '#333"}}className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{background: "#1DA598",
        height: "100%",
        borderRadius: "inherit",
        transition: "width .3s ease-out", width: `${props.percentage}%` }} />
  }
  

export default ProgressBarComponent;
