//maybe have to convert it into a class

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: {}
    };

  }

  componentDidMount() {
    this.props.search({ key: window.YOUTUBE_API_KEY, query: 'cat', max: 5 }, 
      (videos) => {
        this.setState({videos: videos, currentVideo: videos[0]});
      });
  }

  onClickVideo(video) {
    this.setState({currentVideo: video});
  }

  // need a method for search
  onQuerySubmit() {
    var query = document.getElementsByClassName('form-control')[0].value;
    
    console.log(query);
    this.props.search({ key: window.YOUTUBE_API_KEY, query: query, max: 5 }, (videos) => this.setState({videos: videos, currentVideo: videos[0]}));

  }


  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onQuerySubmit={this.onQuerySubmit.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickVideo={this.onClickVideo.bind(this)} />
          </div>
        </div>
      </div>
    );

  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// React.Component.isPrototypeOf(App)