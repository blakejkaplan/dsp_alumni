var React = require('react');
var CustomMenu = require('./menu.js')
var Grid = require('./grid.js')


var App = React.createClass({
    render: function() {
        return (
        <div>
          <CustomMenu></CustomMenu>
          <Grid></Grid>
        </div>

        );
    }
});

React.render(<App/>, document.getElementById("content"));