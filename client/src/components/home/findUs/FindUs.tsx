
import '../../../assets/styleSheet/style.css'; // Import external CSS file
import { facebook,instagram , tripadvisor} from '../../../assets/image/svg/svgIcons';
function FindUs() {
  return (
    <div className="findus-container">
      <h2 className="findus-title">Find Us</h2>
      <div className="findus-icons">
        <div className="findus-fb">
          {facebook({className:"fbIcon"})}
        </div>
        <div className="findus-inster">
          {instagram({className:"insIcon"})}
        </div>
        <div className="findus-tripadvisor">
          {tripadvisor({className:"tripAdvisorIcon"})}
        </div>
      </div>
    </div>
  );
}

export default FindUs;

