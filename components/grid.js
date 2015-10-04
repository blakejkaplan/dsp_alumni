var React = require('react');
var Parse = require('parse');
var ParseReact = require('parse-react');
var Masonry = require('react-masonry-component')(React);

var GridItem = require('./gridItem.js');

var masonryOptions = {
    transitionDuration: 0,
    itemSelector: ".grid-item",
    gutter: 10,
    percentPosition: true
};

var Grid = React.createClass({

    mixins: [ParseReact.Mixin], // Enable query subscriptions

    observe: function() {
        //add config code later
        Parse.initialize();

        // Subscribe to all Comment objects, ordered by creation date
        // The results will be available at this.data.comments
        return {
            comments: (new Parse.Query('Article')).ascending('createdAt')
        };
    },



    render: function() {
        var childElements = this.data.comments.map(function(element){
            return (
                <GridItem imgUrl = {element.coverPic.url()} articleName = {element.articleName}></GridItem>
            );
        });



        return (
            <Masonry
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                id = "animation"
            >
                {childElements}
                {childElements}
                {childElements}
                {childElements}
                {childElements}
                {childElements}

            </Masonry>


        );
    }
});

module.exports = Grid;