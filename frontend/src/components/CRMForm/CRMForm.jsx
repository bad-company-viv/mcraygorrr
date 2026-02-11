import React, { useEffect } from 'react';

const CRMForm = () => {
  useEffect(() => {
    // Check if script already exists to avoid duplicates
    if (!document.querySelector('script[src="https://link.on.bingo/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = "https://link.on.bingo/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="crm-form-container" style={{ width: '100%', height: '100%', minHeight: '630px' }}>
      <iframe
        src="https://link.on.bingo/widget/form/V7qCxzP4e8j2toAHTuf2"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '630px' }}
        id="inline-V7qCxzP4e8j2toAHTuf2"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 0"
        data-height="630"
        data-layout-iframe-id="inline-V7qCxzP4e8j2toAHTuf2"
        data-form-id="V7qCxzP4e8j2toAHTuf2"
        title="McRAYGOR Quotation Request Form"
      >
      </iframe>
    </div>
  );
};

export default CRMForm;
