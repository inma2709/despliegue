const ActivityBox = ({ title, children }) => {
  return (
    <div className="activity-box">
      <h4>🎯 {title}</h4>
      {children}
    </div>
  )
}

const PracticeBox = ({ title, children }) => {
  return (
    <div className="practice-box">
      <h4>💻 {title}</h4>
      {children}
    </div>
  )
}

const WarningBox = ({ title, children }) => {
  return (
    <div className="warning-box">
      <h4>⚠️ {title}</h4>
      {children}
    </div>
  )
}

const CodeBlock = ({ code, language = 'text' }) => {
  return (
    <div className="code-block">
      <code>{code}</code>
    </div>
  )
}

export { ActivityBox, PracticeBox, WarningBox, CodeBlock }
