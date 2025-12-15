import { Link } from 'react-router-dom'

const NavigationButtons = ({ prevPath, nextPath, prevTitle, nextTitle }) => {
  return (
    <div className="navigation-buttons">
      <div>
        {prevPath && (
          <Link to={prevPath} className="btn btn-secondary">
            ← {prevTitle}
          </Link>
        )}
      </div>
      <div>
        {nextPath && (
          <Link to={nextPath} className="btn">
            {nextTitle} →
          </Link>
        )}
      </div>
    </div>
  )
}

export default NavigationButtons
