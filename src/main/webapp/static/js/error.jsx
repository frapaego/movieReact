'use strict';

class Error extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errorCode: "",
            errorMessage: ""
        };
    }

    render() {
        return (
            <div id="innerLogin">   
                <div id="divFormLogin">
                    <header id="hLogin">
                        <h1>Movie REACT JS</h1>
                    </header>
                    <div>        
                        <div className="form-error">
                            <div className="divContentError">
                                <span id="errorCode" className="span-error">{this.state.errorCode}</span>
                                <span id="errorMessage" className="span-error">{this.state.errorMessage}</span>
                            </div>
                            <button className="btn btn-login btnError" type="button" id="btnError">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Error />,
    document.getElementById('error-content')
)