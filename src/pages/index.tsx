import { NextPage } from 'next'
import { Page } from '../components/Page'

const HomePage: NextPage = () => {
  return (
    <Page titleOverride="Site Name" displayTitle="Home">
      <h1>Welcome</h1>
      <p>Do you like my home page?</p>
    </Page>
  )
}

export default HomePage
