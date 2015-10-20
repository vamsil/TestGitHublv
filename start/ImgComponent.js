 var ImgComponent=React.createClass({
        render:function(){
            return(
                <div className="component-style">
                <p>dsffd{this.props.data[0].img}</p>
                 <h3>{this.props.title}</h3>
                 <img src={this.props.path} />
                 <p>{this.props.children}</p>
                </div>
            );
        }
    });

    ReactDOM.render(<div className="container"  data={data}>
                 <ImgComponent title="ANGULAR JS" path="img/angularJS.png">
                     AngularJS is an open-source web application framework maintained by Google and by a community of individual developers and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller and model–view–viewmodel architectures, along with components commonly used in rich Internet application.
                 </ImgComponent>
                <ImgComponent title="REACT JS"  path="img/ReactJS.png">
                 React is an open-source JavaScript library for creating user interfaces that aims to address challenges encountered in developing single-page applications. It is maintained by Facebook, Instagram and a community of individual developers and corporations.
                 </ImgComponent>
                <ImgComponent title="IONIC"  path="img/ionic.png">
                 Ionic is focused mainly on the look and feel, and UI interaction of your application.
                 </ImgComponent>
                 </div>,
    document.body);