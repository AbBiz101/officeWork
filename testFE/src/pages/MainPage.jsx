import React, { useState } from 'react'
import Form from './Form';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      const [expanded, setExpanded] = useState(false);

      const handleChange = (j) => (event, isExpanded) => {
            setExpanded(isExpanded ? j : false)
      };
      return (
            <div className="app" style={{ display: 'grid', columnGap: '50px', gridTemplateColumns: 'auto auto auto' }}>
                  {signs && signs.map((sign, i) => <Accordion key={i + 1} expanded={expanded === i + 1} onChange={handleChange(i + 1)}>
                        <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={sign.varName}
                              id={sign.varName}
                        >
                              {sign.varName}
                        </AccordionSummary>
                        <AccordionDetails>
                              <Form varName={sign.varName}
                                    varCaseNumber={sign.varCaseNumber}
                                    varDelayedUntil={sign.varDelayedUntil}
                                    varAddress={sign.varAddress}
                                    varSignPermitNumber={sign.varSignPermitNumber}
                                    varPosseURL={sign.varPosseURL}
                                    varAttached={sign.varAttached} />
                        </AccordionDetails>
                  </Accordion>
                  )}
            </div>
      )
}



