import './StatusBar.scss';

export default function StatusBar() {
  return (
    <>
      <div className='chbi-lifting-status-bar-container'>
        <div className='chbi-lifting-status-left'>
        <p>Connected</p>
        <p>Flight</p>
        <p>Round</p>
        <p>Lifts Completed</p>
        <p>Bar</p>
        </div>
        <div className='chbi-lifting-status-right'>
          <p>Platform 1</p>
          <p>2026 Nationals</p>
          <p>Open Raw</p>
        </div>
      </div>
    </>
  )
}