import React, { Component } from "react";

import {
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
} from "../../../firebase";
import Button from "../Buttons/buttons";
import VideosListTemplate from "./videosListTemplate";
import styles from "./videosList.css";

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  };

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      firebaseTeams.once("value").then(snapshot => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams
        });
      });
    }

    firebaseVideos
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then(snapshot => {
        const videos = firebaseLooper(snapshot);
        this.setState({
          videos: [...this.state.videos, ...videos],
          start,
          end
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  renderVideos = () => {
    let template = null;

    switch (this.props.type) {
      case "card":
        template = (
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        );
        break;
      default:
        template = null;
    }
    return template;
  };

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
  };

  renderButton = loadmore => {
    return loadmore ? (
      <Button
        type="loadmore"
        loadMore={() => this.loadMore()}
        cta="Load More Videos"
      />
    ) : (
      <Button type="linkTo" cta="More videos" linkTo="/videos" />
    );
  };

  renderTitle = title => {
    return title ? (
      <h3>
        <strong>NBA</strong> videos
      </h3>
    ) : null;
  };

  render() {
    return (
      <div className={styles.videosList_wrapper}>
        {this.renderTitle(this.props.title)}
        {this.renderVideos()}
        {this.renderButton(this.props.loadmore)}
      </div>
    );
  }
}

export default VideosList;
