var React = require('react');
var ReactDOM = require('react-dom');
var Site = require('./Site');

const data = {
    summary: 'Lorem Ipsum',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting " +
    "industry. Lorem Ipsum has been the industry's standard dummy text ever since " +
    "the 1500s, when an unknown printer took a galley of type and scrambled it to " +
    "make a type specimen book. It has survived not only five centuries, but also " +
    "the leap into electronic typesetting, remaining essentially unchanged. It was " +
    "popularised in the 1960s with the release of Letraset sheets containing Lorem " +
    "Ipsum passages, and more recently with desktop publishing software like Aldus " +
    "PageMaker including versions of Lorem Ipsum."
};

var App = React.createClass({
    render() {
        return (
            <div>
                <Site summary={this.props.data.summary} details={this.props.data.details} />
                <Site summary={this.props.data.summary} details={this.props.data.details} />
            </div>
        );
    }
});

ReactDOM.render(
    <App data={data} />,
    document.getElementById("app")
);
