/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "LirElia"

interface ContactConfirmationProps {
  name?: string
  subject?: string
}

const ContactConfirmationEmail = ({ name, subject }: ContactConfirmationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nous avons bien reçu votre demande – {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Merci ${name} !` : 'Merci pour votre message !'}
        </Heading>
        <Text style={text}>
          Nous avons bien reçu votre demande de conseil
          {subject ? ` concernant « ${subject} »` : ''}.
        </Text>
        <Text style={text}>
          Notre équipe vous répondra dans les meilleurs délais, généralement sous 48 heures.
        </Text>
        <Text style={text}>
          En attendant, n'hésitez pas à consulter nos guides sur la basse vision
          sur notre site.
        </Text>
        <Text style={footer}>
          À bientôt,{'\n'}L'équipe {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Votre demande a bien été reçue – LirElia',
  displayName: 'Confirmation de contact',
  previewData: { name: 'Jean Dupont', subject: 'Loupe électronique' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Source Sans 3', Arial, sans-serif" }
const container = { padding: '20px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0d3266', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#1a2e4a', lineHeight: '1.5', margin: '0 0 25px' }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0', whiteSpace: 'pre-line' as const }
