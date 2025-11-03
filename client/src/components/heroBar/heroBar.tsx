import '../../assets/styleSheet/style.css'
import videos from '../../assets/video/1101.mp4'
function heroBar() {
  return (
    <div className='herobar'>
      <div className="videosection">
        <video src={videos} autoPlay loop muted className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default heroBar