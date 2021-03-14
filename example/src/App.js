import React from 'react'
import FixedAspectRatioBox from 'react-fixed-aspect-ratio-box'
import 'react-fixed-aspect-ratio-box/dist/index.css'

function App() {
  return (
    <>
      <main>
        <header>
          <h1>react-fixed-aspect-ratio-box example</h1>
          <p>
            <a
              href='https://github.com/DavideDeFeudis/react-fixed-aspect-ratio-box'
              target='_blank'
            >
              GitHub repo
            </a>
          </p>
          <p>
            <a
              href='https://www.npmjs.com/package/react-fixed-aspect-ratio-box'
              target='_blank'
            >
              Npm package
            </a>
          </p>
          <p>Resize the window horizontally and vertically.</p>
        </header>
        <section>
          <FixedAspectRatioBox targetAspectRatio={16 / 9}>
            <div className='child'></div>
          </FixedAspectRatioBox>
        </section>
      </main>
    </>
  )
}

export default App
