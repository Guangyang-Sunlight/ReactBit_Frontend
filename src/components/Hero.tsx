import React from 'react'
import RotatingText from './RotatingText'

export function Hero(): JSX.Element {
  return (
    <section className="hero">
      <p className="eyebrow">Nexa AI Solutions</p>
      {/* <h1 className="headline">Craft Your Intelligence</h1> */}
  
      <RotatingText
        texts={['Craft Your Intelligence', 'Craft Your Intelligence']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />

      <div className="prompt">
        <span className="icon" aria-hidden>💡</span>
        <input
          placeholder="Ställ en juridisk fråga, ladda upp ett dokument, eller be mig skapa ett avtal..."
        />
        <button className="send" aria-label="send">➤</button>
      </div>

      <p className="disclaimer">
        Lawie ger endast allmän information och ersätter inte juridisk rådgivning.
      </p>

      <div className="actions">
        <button className="btn primary">Skapa konto</button>
        <button className="btn secondary">Läs mer</button>
      </div>

    
    </section>
  )
}


