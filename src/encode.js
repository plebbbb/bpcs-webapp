import React from 'react';
import tachyons from 'tachyons';
import { Component } from 'react';
const FormData = require('form-data');
class Encode extends Component{
    constructor(props){
        super(props);
        this.state = {
            Ifile: null,
            Dfile: null,
            BLKHT: null,
            IBF: null,
            FBF: null,
            WBF: null,
            DURL: null,
            FP: null,
        }
    }

    onChangeFHandler=e=>{
        this.setState({
            [e.target.name]: e.target.files[0]
        })
        if(e.target.name === "Ifile") this.setState({FP : URL.createObjectURL(e.target.files[0])})
        console.log(this.state)
    }

    
    onChangeHandler=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }


    onSubmitHandler = () => {
        let data = new FormData()
        data.append('data_file', this.state.Dfile)
        data.append('base_file', this.state.Ifile)
        data.append("block_height", this.state.BLKHT)
        data.append("init_block_factor", this.state.IBF)
        data.append("final_block_factor", this.state.FBF)
        data.append("write_block_factor", this.state.WBF)

        const block = {
            method: "POST",
            body: data
        }

        fetch("https://bpcs-api.herokuapp.com/encode", block)
        .then((response) => {
            const val = response
            response.blob().then((blob) => {
                const filedownloadurl = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = filedownloadurl;
                link.setAttribute('download', val.headers.get('filename'));
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            
            })});
      //  data.append('data_file', this.state.Dfile)
      //  data.append('block_height', this.state.BLKHT)
     //   data.append("init_block_factor", this.state.IBF)
      //  data.append("final_block_factor", this.state.FBF)
       // data.append("write_block_factor", this.state.WBF)
    }


    render(){
        return(
            <div className = "flex">
                <div className = "flex flex-column pa3">
                    <div className = "f1 pb2 tl">Encode files</div>
                    <div className = "flex pa1">
                        <label className = "f4 ba ph3 pv2 mb2 dib bw1" for="Ifile">Upload Base File</label>
                        <input hidden="true" type="file" name="Ifile" id = "Ifile" onChange={this.onChangeFHandler}/>
                    </div>
                    <div className = "flex pa1">
                        <label className = "f4 ba ph3 pv2 mb2 dib bw1" for="Dfile">Upload Data File</label>
                        <input hidden="true" type="file" name="Dfile" id = "Dfile" onChange={this.onChangeFHandler}/>
                    </div>
                    <div className = "pa1">
                        <div class = "f6 b db mb2">Initial complexity threshold</div>
                        <input class = "" type="text" name="IBF" onChange={this.onChangeHandler}/>
                    </div>
                    <div className = "pa1">
                        <div class = "f6 b db mb2">Final complexity threshold</div>
                        <input type="text" name="FBF" onChange={this.onChangeHandler}/>
                    </div>
                    <div className = "pa1">
                        <div class = "f6 b db mb2">Write complexity threshold</div>
                        <input type="text" name="WBF" onChange={this.onChangeHandler}/>
                    </div>
                    <div className = "pa1">
                        <div class = "f6 b db mb2">Block height</div>
                        <input type="text" name="BLKHT" onChange={this.onChangeHandler}/>
                    </div>
                    <div className = "pv3 ph1">
                        <label className = "f4 ba ph3 pv1 mb2 dib bw1" onClick={this.onSubmitHandler}>Submit</label>
                    </div>
                </div>
                <img class = "flex" src = {this.state.FP}  alt = "Upload Image"/>
            </div>
        );
    }
}

export default Encode;