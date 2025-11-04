import '../../assets/styleSheet/style.css';
import NavBar from '../navBar/navBar';
import ReactPlayer from 'react-player';

function HeroBar() {
  const videoSrc = "https://www.youtube.com/watch?v=63o5y99oigc";

  return (
    <div className="herobar w-full h-[500px] relative overflow-hidden">
      {/* Background YouTube Video */}
      <ReactPlayer
        src={videoSrc}
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          // Makes the video cover the container
          objectFit: 'cover',
        }}
      />

      {/* NavBar Overlay */}
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>
    </div>
  );
}

export default HeroBar;
