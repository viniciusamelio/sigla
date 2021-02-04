import React, { PureComponent } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            opened: false
        }
    }

    renderDrawer = () => {
        if (this.state.opened) {
            return <div className="column is-flex is-flex-direction-column has-text-centered" style={{ width: '100vw', height:'auto', position: 'fixed', top: '79px', padding: '8px', backgroundColor: '#1A072B',left:0 }}>
                <a className="has-text-white px-2 py-3" href="#home">Home</a>
                <a className="has-text-white px-2 py-3" href="#produtos">Produtos</a>
                <a className="has-text-white px-2 py-3" href="#agenda">Agenda</a>
                <a className="has-text-purple px-2 py-3" href="#patrocinadores">Patrocinadores</a>
                <a className="has-text-green px-2 py-3" href="#contato">Contato</a>
            </div>
        }
    }

    renderIcon=()=>{
        if(this.state.opened){
            return <FaTimes onClick={()=>this.setState({opened:false})} className="is-size-4 has-text-white" />
        }
        return <FaBars onClick={()=>this.setState({opened:true})} className="is-size-4 has-text-white" />
    }

    render() {
        return (
            <nav className="px-5 py-3 is-flex is-align-items-center is-justify-content-space-between" style={{ zIndex:10, backgroundColor: '#1A072B', position: 'fixed', left: 0, top: 0, width: '100vw' }}>
                <Image src="/images/logo.png" height="55px" width="200px" />

                <div className="is-hidden-mobile is-flex is-align-items-center is-justify-content-flex-end pr-5">
                    <a className="has-text-white px-2" href="#home">Home</a>
                    <a className="has-text-white px-2" href="#produtos">Produtos</a>
                    <a className="has-text-white px-2" href="#agenda">Agenda</a>
                    <a className="has-text-purple px-2" href="#patrocinadores">Patrocinadores</a>
                    <a className="has-text-green px-2" href="#contato">Contato</a>
                </div>

                <div className="is-hidden-desktop">
                    <div className="column is-12 is-align-items-center is-justify-content-flex-end pr-3">
                        {this.renderIcon()}
                        {this.renderDrawer()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;