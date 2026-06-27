import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div style={{
      backgroundColor: color,
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      transition: 'background-color 0.2s'
    }}>
      <div style={{
        position: 'fixed',
        bottom: '48px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          backgroundColor: 'white',
          padding: '8px 16px',
          borderRadius: '999px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }}>
          {[
            {name: 'Red', color: 'red'},
            {name: 'Green', color: 'green'},
            {name: 'Blue', color: 'blue'},
            {name: 'Yellow', color: 'yellow'},
            {name: 'Pink', color: 'pink'},
            {name: 'Black', color: 'black'},
          ].map((btn) => (
            <button
              key={btn.color}
              onClick={() => setColor(btn.color)}
              style={{
                backgroundColor: btn.color,
                color: btn.color === 'yellow' ? 'black' : 'white',
                border: 'none',
                padding: '6px 20px',
                borderRadius: '999px',
                cursor: 'pointer',
                fontSize: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >{btn.name}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App