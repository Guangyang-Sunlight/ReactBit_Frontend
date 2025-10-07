import React from 'react'

export default function OmOss(): JSX.Element {
  return (
    <div className="page om-oss-page">
      <div className="container">
        <h1>Om oss</h1>
        <p>Vi är ett team av jurister och tekniker som arbetar för att göra juridik tillgänglig för alla.</p>
        
        <div className="about-content">
          <div className="mission">
            <h2>Vår mission</h2>
            <p>
              Vi tror att juridisk rådgivning ska vara tillgänglig, förståelig och prisvärd för alla. 
              Genom att kombinera artificiell intelligens med juridisk expertis skapar vi verktyg som 
              hjälper både privatpersoner och företag att navigera i komplexa juridiska frågor.
            </p>
          </div>
          
          <div className="team">
            <h2>Vårt team</h2>
            <div className="team-grid">
              <div className="team-member">
                <h3>Anna Andersson</h3>
                <p>Jurist & Grundare</p>
              </div>
              <div className="team-member">
                <h3>Erik Eriksson</h3>
                <p>Teknisk Chef</p>
              </div>
              <div className="team-member">
                <h3>Maria Svensson</h3>
                <p>Produktchef</p>
              </div>
            </div>
          </div>
          
          <div className="contact">
            <h2>Kontakta oss</h2>
            <p>Email: info@reactbit.se</p>
            <p>Telefon: 08-123 456 78</p>
          </div>
        </div>
      </div>
    </div>
  )
}
