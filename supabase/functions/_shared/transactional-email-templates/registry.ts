/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as clubRegistration } from './club-registration.tsx'
import { template as bilanConfirmation } from './bilan-confirmation.tsx'
import { template as adminNotification } from './admin-notification.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'club-registration': clubRegistration,
  'bilan-confirmation': bilanConfirmation,
  'admin-notification': adminNotification,
}
