import React from 'react';
import tachyons from 'tachyons';
import { Component } from 'react';
const FormData = require('form-data');
class Decode extends Component{
    constructor(props){
        super(props);
        this.state = {
            IDfile: null,
            BLKHTD: null,
            IBFD: null,
            FBFD: null,
            WBFD: null,
            DURLD: null,
        }
    }

    onChangeFHandler=e=>{
        this.setState({
            [e.target.name]: e.target.files[0]
        })
      //  if(e.target.name === "Ifile") this.setState({FP : URL.createObjectURL(e.target.files[0])})
       // console.log(this.state)
    }

    
    onChangeHandler=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
     //   console.log(this.state)
    }


    onSubmitHandler = () => {
        let datae = new FormData()
        datae.append('base_file', this.state.IDfile)
        datae.append("block_height", this.state.BLKHTD)
        datae.append("init_block_factor", this.state.IBFD)
        datae.append("final_block_factor", this.state.FBFD)
        datae.append("write_block_factor", this.state.WBFD)

        const block = {
            method: "POST",
            body: datae
        }

        fetch("https://bpcs-api.herokuapp.com/decode", block)
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
                    <div className = "f2 pa1 pb3 tl">Decode files</div>
                    <div class = "bt pb2 bb">
                        <div class = "f6 ph1 pt1">Upload files</div>
                            <div className = "flex ph1 pt1">
                            <label className = "f4-ns f6-s ba ph3 pv2 mb2 dib bw1 w-100 tc" for="IDfile">{this.state.IDfile != null ? (this.state.IDfile.name.length > 16 ? "Too long to show" : `${this.state.IDfile.name}`):"Upload Image File"}</label>
                            <input hidden="true" type="file" name="IDfile" id = "IDfile" accept = "image/bmp" onChange={this.onChangeFHandler}/>
                        </div>
                    </div>
                    <div class = "pb2 bb">
                        <div class = "f6 pa1">Configure parameters</div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Ict</div>
                            <input class = "f6 w-100 tr" type="text" name="IBFD" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Fct</div>
                            <input class = "f6 w-100 tr" type="text" name="FBFD" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">Wct</div>
                            <input  class = "f6 w-100 tr" type="text" name="WBFD" onChange={this.onChangeHandler}/>
                        </div>
                        <div className = "flex pa1">
                            <div class = "f6 b db mb2 pr2">BlkHt</div>
                            <input  class = "f6 w-100 tr" type="text" name="BLKHTD" onChange={this.onChangeHandler}/>
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

export default Decode;