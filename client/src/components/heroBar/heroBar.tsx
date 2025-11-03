import '../../assets/styleSheet/style.css'
function heroBar() {
  const videoUrl = "https://drive.google.com/uc?export=download&id=1SZVRTGlDvxTNRrqbExatb_lSvalSx3mc" // replace with your actual ID
  return (
    <div className='herobar'>
      <div className="videosection">
        <video src={videoUrl} autoPlay loop muted className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default heroBar