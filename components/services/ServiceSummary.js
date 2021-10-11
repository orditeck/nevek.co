import React from 'react';

export const ServiceSummary = ({ onClickHandler, currentService, service, children }) =>
    <article
        className={currentService === service ? 'active' : ''}
        onClick={() => onClickHandler(service)}
        id={service}
    >
        {children}
        <div className="btn">En savoir plus</div>
    </article>