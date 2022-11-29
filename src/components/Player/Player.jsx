import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends Component {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        isVideoLoader: false,
      });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showLoader = url && !isVideoLoaded;
    const playSize = isVideoLoaded ? '100%' : 0;
    return (
      <>
        {showLoader && !isVideoLoaded && <h2>Загружаєм відео...</h2>}

        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              width={playSize}
              height={playSize}
              onReady={() => this.setState({ isVideoLoader: true })}
              controls
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
