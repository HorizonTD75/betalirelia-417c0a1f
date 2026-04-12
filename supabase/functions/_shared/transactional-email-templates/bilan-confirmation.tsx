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

interface BilanConfirmationProps {
  name?: string
  bilanType?: string
}

const BilanConfirmationEmail = ({ name, bilanType }: BilanConfirmationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre demande de {bilanType || 'bilan'} a bien été reçue – {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Merci ${name} !` : 'Merci pour votre demande !'}
        </Heading>
        <Text style={text}>
          Votre demande de rendez-vous pour un <strong>{bilanType || 'bilan basse vision'}</strong> a bien été enregistrée.
        </Text>
        <Text style={text}>
          Un conseiller en basse vision vous recontactera très prochainement par téléphone pour un appel préliminaire
          afin de confirmer le bilan le plus adapté à votre situation.
        </Text>
        <Text style={text}>
          Cet appel est sans engagement de votre part.
        </Text>
        <Text style={footer}>
          À bientôt,{'\n'}L'équipe {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: BilanConfirmationEmail,
  subject: (data: Record<string, any>) =>
    `Votre demande de ${data.bilanType || 'bilan'} – LirElia`,
  displayName: 'Confirmation bilan',
  previewData: { name: 'Jean Dupont', bilanType: 'Bilan Expert' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Source Sans 3', Arial, sans-serif" }
const container = { padding: '20px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0d3266', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#1a2e4a', lineHeight: '1.5', margin: '0 0 25px' }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0', whiteSpace: 'pre-line' as const }
