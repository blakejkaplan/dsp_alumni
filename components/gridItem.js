var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');

var GridItem = React.createClass({

    mixins: [ParseReact.Mixin], // Enable query subscriptions

    observe: function() {
        Parse.initialize("EDpXTE2nuCYW4UceqRztUrz691bjaT9SfgaY6Igq", "FTqRrEbx6MYNFtN5nlW6Xo9lYPEX7LThCbbSBe9h");

        // Subscribe to all Comment objects, ordered by creation date
        // The results will be available at this.data.comments
        return {
            articles: (new Parse.Query('Article')).ascending('createdAt')
        };
    },



    render: function() {
        return (
            <div className = "grid-item tileStyle" id = "gridItem">
                <img src = {this.props.imgUrl}/>
                <h1>{this.props.articleName}</h1>
            </div>

        );
    }
});

module.exports = GridItem;