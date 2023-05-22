// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    LinkedClaim: {
      id: 'kjzl6hvfrbw6c7f8zr4bdyzfumj7hv7r9i7dbu57isrzezqjuetkum2885p9agc',
      accountRelation: { type: 'list' }
    }
  },
  objects: {
    LinkedClaimMeasure: {
      unit: { type: 'string', required: false },
      value: { type: 'float', required: true },
      howMeasured: { type: 'string', required: false }
    },
    LinkedClaimNormalizedRating: {
      score: { type: 'float', required: true },
      stars: { type: 'integer', required: false },
      aspect: { type: 'string', required: false }
    },
    LinkedClaimClaimSource: {
      author: { type: 'string', required: false },
      curator: { type: 'string', required: false },
      howKnown: { type: 'reference', refType: 'enum', refName: 'LinkedClaimHowKnown', required: false },
      sourceID: { type: 'string', required: false },
      dateObserved: { type: 'date', required: false },
      digestMultibase: { type: 'string', required: false }
    },
    LinkedClaimSharing: {
      respondAt: { type: 'string', required: true },
      intendedAudience: { type: 'string', required: false }
    },
    LinkedClaim: {
      amt: { type: 'reference', refType: 'object', refName: 'LinkedClaimMeasure', required: false },
      claim: { type: 'string', required: true },
      object: { type: 'string', required: false },
      rating: { type: 'reference', refType: 'object', refName: 'LinkedClaimNormalizedRating', required: false },
      source: { type: 'reference', refType: 'object', refName: 'LinkedClaimClaimSource', required: false },
      sharing: { type: 'reference', refType: 'object', refName: 'LinkedClaimSharing', required: false },
      statement: { type: 'string', required: false },
      subjectID: { type: 'string', required: true },
      confidence: { type: 'float', required: false },
      subjectName: { type: 'string', required: false },
      subjectType: { type: 'reference', refType: 'enum', refName: 'LinkedClaimSubjectType', required: false },
      effectiveDate: { type: 'date', required: false }
    }
  },
  enums: {
    LinkedClaimHowKnown: [
      'FIRST_HAND',
      'SECOND_HAND',
      'WEB_DOCUMENT',
      'VERIFIED_LOGIN',
      'BLOCKCHAIN',
      'SIGNED_DOCUMENT',
      'PHYSICAL_DOCUMENT',
      'INTEGRATION',
      'RESEARCH',
      'OPINION',
      'OTHER'
    ],
    LinkedClaimSubjectType: [
      'PERSON',
      'ORGANIZATION',
      'PRODUCT',
      'EVENT',
      'PLACE',
      'ENTITY',
      'ACTION',
      'DOCUMENT',
      'CLAIM',
      'IDEA',
      'THING',
      'OTHER'
    ]
  },
  accountData: { linkedClaimList: { type: 'connection', name: 'LinkedClaim' } }
}
