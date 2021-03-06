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
                <div className = "flex flex-column pa3 w5">
                    <div className = "f2 pa1 pb3 tl">Encode files</div>
                    <div class = "bt pb2 bb">
                        <div class = "f6 ph1 pt1">Upload files</div>
                            <div className = "flex ph1 pt1">
                            <label className = "f4-ns f6-s ba ph3 pv2 mb2 dib bw1 w-100 tc" for="Ifile">{this.state.Ifile != null ? (this.state.Ifile.name.length > 16 ? "Too long to show" : `${this.state.Ifile.name}`):"Upload Base File"}</label>
                            <input hidden="true" type="file" name="Ifile" id = "Ifile" accept = "image/bmp" onChange={this.onChangeFHandler}/>
                        </div>
                        <div className = "flex ph1 pt1">
                            <label className = "f4-ns f6-s ba ph3 pv2 mb2 dib bw1 w-100 tc" for="Dfile">{this.state.Dfile != null ? (this.state.Dfile.name.length > 16 ? "Too long to show" : `${this.state.Dfile.name}`) :"Upload Data File"}</label>
                            <input hidden="true" type="file" name="Dfile" id = "Dfile" onChange={this.onChangeFHandler}/>
                        </div>
                    </div>
                    <div class = "pb2 bb">
                        <div class = "f6 pa1">Configure parameters</div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Ict</div>
                            <input class = "f6 w-100 tr" type="text" name="IBF" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Fct</div>
                            <input class = "f6 w-100 tr" type="text" name="FBF" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Wct</div>
                            <input  class = "f6 w-100 tr" type="text" name="WBF" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">BlkHt</div>
                            <input  class = "f6 w-100 tr" type="text" name="BLKHT" onChange={this.onChangeHandler}/>
                        </div>
                    </div>
                    <div className = "flex pv3 ph1 w-100">
                        <label className = "f4 ba ph3 pv1 mb2 dib bw1  w-100 tc" onClick={this.onSubmitHandler}>Submit</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Encode;