import React from 'react'
import Form from './Form';


export default function MainPage() {
      const signs = [
            {
                  varName: 'Alcohol Variance',
                  varCaseNumber: true,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },
            {
                  varName: 'Demolition and Removal',
                  varCaseNumber: true,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },
            {
                  varName: 'SPSD Sign',
                  varCaseNumber: true,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },
            {
                  varName: 'Proposed Rezoning',
                  varCaseNumber: true,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },
            {
                  varName: 'Generic Rezoning',
                  varCaseNumber: true,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },
            {
                  varName: 'SPSD CA Sign',
                  varCaseNumber: false,
                  varDelayedUntil: false,
                  varAddress: false,
                  varSignPermitNumber: true,
                  varPosseURL: true,
                  varAttached: true,

            },
            {
                  varName: 'Demolition Delay',
                  varCaseNumber: false,
                  varDelayedUntil: true,
                  varAddress: true,
                  varSignPermitNumber: false,
                  varPosseURL: false,
                  varAttached: false,
            },

      ]

      return (
            <div className="app" style={{ display: 'grid', columnGap:'50px',gridTemplateColumns: 'auto auto auto'  }}>
                  {signs.map((sign, i) => <Form key={i} varName={sign.varName}
                        varCaseNumber={sign.varCaseNumber}
                        varDelayedUntil={sign.varDelayedUntil}
                        varAddress={sign.varAddress}
                        varSignPermitNumber={sign.varSignPermitNumber}
                        varPosseURL={sign.varPosseURL}
                        varAttached={sign.varAttached} />
                  )}
            </div>
      )
}
