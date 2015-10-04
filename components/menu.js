var React = require('react');



var CustomMenu = React.createClass({
    render: function() {
        return (


            <nav className ="navbar navbar-default">
              <div className ="container-fluid">

                <div className ="navbar-header">
                  <button type="button" className ="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className ="sr-only">Toggle navigation</span>
                    <span className ="icon-bar"></span>
                    <span className ="icon-bar"></span>
                    <span className ="icon-bar"></span>
                  </button>
                  <a className ="navbar-brand" href="#">DUKE DSP Connect</a>
                </div>

                <p className ="navbar-text">User Name</p>
                <form className ="navbar-form navbar-left" role="search">
                  <div className ="form-group">
                    <input type="text" className ="form-control" placeholder="User Name"/>
                  </div>
                </form>
                <p className ="navbar-text">Password</p>
                <form className ="navbar-form navbar-left" role="search">
                  <div className ="form-group">
                    <input type="text" className ="form-control" placeholder="Search"/>
                  </div>
                  <button type="submit" className ="btn btn-default">Submit</button>
                </form>

                <div className ="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className ="nav navbar-nav">
                    <li className ="dropdown">
                      <a href="#" className ="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Filter <span className ="caret"></span></a>
                      <ul className ="dropdown-menu">
                        <li><a href="#">Popularity</a></li>
                        <li role="separator" className ="divider"></li>
                        <li><a href="#">Date</a></li>
                      </ul>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>

        );
    }
});

module.exports = CustomMenu;