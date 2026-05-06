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
  Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "LirElia"

interface AdminNotificationProps {
  formType?: string
  name?: string
  email?: string
  phone?: string
  details?: string
}

const AdminNotificationEmail = ({ formType, name, email, phone, details }: AdminNotificationProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle inscription {formType || 'formulaire'} – {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          Nouvelle inscription : {formType || 'Formulaire'}
        </Heading>
        <Text style={text}>
          Un nouveau formulaire a été soumis sur {SITE_NAME}.
        </Text>
        <Hr style={hr} />
        {name && <Text style={detail}><strong>Nom :</strong> {name}</Text>}
        {email && <Text style={detail}><strong>Email :</strong> {email}</Text>}
        {phone && <Text style={detail}><strong>Téléphone :</strong> {phone}</Text>}
        {details && <Text style={detail}><strong>Détails :</strong> {details}</Text>}
        <Hr style={hr} />
        <Text style={footer}>
          Notification automatique – {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AdminNotificationEmail,
  subject: (data: Record<string, any>) =>
    `[LirElia] Nouvelle inscription ${data.formType || 'formulaire'}`,
  displayName: 'Notification admin',
  previewData: { formType: 'Club', name: 'Marie Martin', email: 'marie@test.fr', phone: '06 12 34 56 78' },
  to: Deno.env.get('ADMIN_NOTIFICATION_EMAIL') || 'bleuhorizon2018@gmail.com',
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Source Sans 3', Arial, sans-serif" }
const container = { padding: '20px 25px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#0d3266', margin: '0 0 20px' }
const text = { fontSize: '14px', color: '#1a2e4a', lineHeight: '1.5', margin: '0 0 15px' }
const detail = { fontSize: '14px', color: '#1a2e4a', lineHeight: '1.5', margin: '0 0 8px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '20px 0 0' }
