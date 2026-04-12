/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "LirElia"
const SITE_URL = "https://lirelia.fr"

interface ClubRegistrationProps {
  name?: string
}

const ClubRegistrationEmail = ({ name }: ClubRegistrationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Bienvenue au Club {SITE_NAME} !</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Bienvenue ${name} !` : 'Bienvenue au Club LirElia !'}
        </Heading>
        <Text style={text}>
          Votre inscription au Club LirElia a bien été enregistrée. Nous sommes ravis de vous compter parmi nous !
        </Text>
        <Text style={text}>
          Vous recevrez prochainement un e-mail avec les informations pour la prochaine session du Club.
        </Text>
        <Text style={text}>
          En attendant, n'hésitez pas à consulter{' '}
          <Link href={`${SITE_URL}/charte-club-lirelia`} style={link}>
            la charte du Club
          </Link>{' '}
          pour découvrir nos valeurs et notre fonctionnement.
        </Text>
        <Text style={footer}>
          À très bientôt,{'\n'}L'équipe {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ClubRegistrationEmail,
  subject: 'Bienvenue au Club LirElia !',
  displayName: 'Inscription Club',
  previewData: { name: 'Marie Martin' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Source Sans 3', Arial, sans-serif" }
const container = { padding: '20px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0d3266', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#1a2e4a', lineHeight: '1.5', margin: '0 0 25px' }
const link = { color: '#0d3266', textDecoration: 'underline' }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0', whiteSpace: 'pre-line' as const }
