import '@digdir/designsystemet-theme'
import '@digdir/designsystemet-css/index.css'
import { Heading, Paragraph } from '@digdir/designsystemet-react';
import './App.css'

function App() {
  return (
    <div>
      <Heading data-size='lg' level={1}>Velkommen til Designsystemet workshop.</Heading>
      <Paragraph>Redigere kildekoden på denne siden iht. designet ditt</Paragraph>
    </div>
  )
}

export default App
