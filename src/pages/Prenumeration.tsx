import React from 'react'

export default function Prenumeration(): JSX.Element {
  return (
    <div className="page prenumeration-page">
      <div className="container">
        <div className="pricing-header">
          <p className="eyebrow">Välj den plan som passar dig bäst.</p>
        </div>

        <section className="plans-grid">
          <article className="plan-card">
            <header className="plan-head">
              <div className="plan-tier">Grundläggande</div>
              <h3 className="plan-title">Gratis</h3>
              <div className="price-line"><span className="price">0</span><span className="per">kr/mån</span></div>
            </header>
            <ul className="feature-list">
              <li className="ok">1 fråga per dag</li>
              <li className="no">Ladda upp filer</li>
              <li className="no">Skapa avtal</li>
              <li className="no">Spara som PDF</li>
              <li className="ok muted">Grundläggande support</li>
            </ul>
            <button className="btn ghost plan-cta">Nuvarande plan</button>
          </article>

          <article className="plan-card">
            <header className="plan-head">
              <div className="plan-tier">Standard</div>
              <h3 className="plan-title">Standard</h3>
              <div className="price-line"><span className="price">99</span><span className="per">kr/mån</span></div>
            </header>
            <ul className="feature-list">
              <li className="ok">300 frågor per månad</li>
              <li className="no">Ladda upp filer</li>
              <li className="no">Skapa avtal</li>
              <li className="no">Spara som PDF</li>
              <li className="ok muted">Prioriterad support</li>
            </ul>
            <button className="btn primary plan-cta">Välj Standard</button>
          </article>

          <article className="plan-card popular">
            <div className="badge">Populär</div>
            <header className="plan-head">
              <div className="plan-tier">Fördjupad</div>
              <h3 className="plan-title">Premium</h3>
              <div className="price-line"><span className="price">249</span><span className="per">kr/mån</span></div>
            </header>
            <ul className="feature-list">
              <li className="ok">900 frågor per månad</li>
              <li className="ok">Ladda upp filer</li>
              <li className="ok">Skapa avtal</li>
              <li className="ok">Spara som PDF</li>
              <li className="ok highlight">Högsta prio-support</li>
            </ul>
            <button className="btn primary plan-cta">Välj Premium</button>
          </article>

          <article className="plan-card advanced">
            <div className="badge">Avancerad</div>
            <header className="plan-head">
              <div className="plan-tier">Avancerad</div>
              <h3 className="plan-title">Ultimat</h3>
              <div className="price-line"><span className="price">399</span><span className="per">kr/mån</span></div>
            </header>
            <ul className="feature-list">
              <li className="ok">1500 frågor per månad</li>
              <li className="ok">Ladda upp filer</li>
              <li className="ok">Skapa avtal</li>
              <li className="ok">Spara som PDF</li>
              <li className="ok highlight">Högsta prio-support</li>
            </ul>
            <button className="btn secondary plan-cta">Välj Ultimat</button>
          </article>
        </section>

        <section className="faq">
          <h2>Vanliga frågor</h2>
          <div className="faq-list">
            <details>
              <summary>Hur byter jag plan?</summary>
              <p>Du kan uppgradera eller nedgradera när som helst i kontoinställningarna.</p>
            </details>
            <details>
              <summary>Vad händer när jag når gränsen?</summary>
              <p>När gränsen är nådd pausas tillgången tills nästa period eller vid uppgradering.</p>
            </details>
            <details>
              <summary>Var kan jag se hur många frågor jag har kvar?</summary>
              <p>Översikt finns under ditt konto där din nuvarande användning visas.</p>
            </details>
            <details>
              <summary>Kan jag säga upp när som helst?</summary>
              <p>Ja, du kan avsluta när som helst. Din plan gäller till periodens slut.</p>
            </details>
            <details>
              <summary>Andra frågor?</summary>
              <p>Kontakta oss så hjälper vi dig gärna vidare.</p>
            </details>
          </div>
        </section>
      </div>
    </div>
  )
}
