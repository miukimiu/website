import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Sponsors from '../components/Sponsors'
import Info from '../components/Info'
import Speakers from '../components/Speakers'
import Attendees from '../components/Attendees'
import Thanks from '../components/Thanks'
import Panel from '../components/Panel'
import Heading from '../components/Heading'

const Main = ({ city, attendees }) => {
  const { site, thanks, speakers, sponsors, info } = city

  return (
    <Layout>
      <SEO
        title={`QueerJS - ${info.city}`}
        description={'A meetup for everyone where Queer Speakers take the stage'}
      />
      <section>
        <Heading sub="queerjs @">{info.city}</Heading>
        <Info attendeesNumber={attendees.length} site={site} info={info} city={info.link} />
        <Panel heading="What?">
          <p>
            This is a meetup where anyone is welcome to attend and support the speakers and the idea
            but all the speakers will be Queer.
            <br />
            This meetup exists to give a voice to everyone, to make a safe space where everyone is
            welcome.
          </p>
          <p>
            Join us! There will be food and stickers{' '}
            <span role="img" aria-label="Queer Rainbow">
              🌈
            </span>
          </p>
        </Panel>
        <Panel heading="Speakers">
          <Speakers cfp={site.cfp} speakers={speakers.filter(s => !s.mc)} />
        </Panel>
        {speakers.filter(s => s.mc).length ? (
          <Panel heading="MC">
            <Speakers noSpeak cfp={site.cfp} speakers={speakers.filter(s => s.mc)} />
          </Panel>
        ) : null}
        <Panel heading={`Attendees (${attendees.length})`}>
          <Attendees attendees={attendees} />
        </Panel>

        <Panel heading="Sponsors">
          <Sponsors sponsors={sponsors} />
        </Panel>
      </section>

      <Panel heading={thanks && thanks.length ? 'Special Thanks' : null}>
        <Thanks thanks={thanks || []} />
      </Panel>
    </Layout>
  )
}

export default Main
