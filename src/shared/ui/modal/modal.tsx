'use client';

import React, { useEffect } from 'react';

type ModalProps = {
  title?: string;
  content: string;
  firstButtonText?: string; // кнопка может быть одна, может и не быть, по этому опционально
  secondButtonText?: string;
  onFirstButtonClick?: () => void; 
  onSecondButtonClick?: () => void;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  title,
  content,
  firstButtonText,
  secondButtonText,
  onFirstButtonClick,
  onSecondButtonClick,
  onClose,
}) => {
 
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Стили пока так
  const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '8px',
    maxWidth: '40rem',  
    padding: '2.4rem', 
    position: 'relative',
    gap: '2rem'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.8rem', 
    fontWeight: '500',  
    marginBottom: '0.8rem', 
    color: '#1C1C1E'
  };


  const contentStyle: React.CSSProperties = {
    fontFamily: 'Roboto',
    fontWeight: 400,  
    fontStyle: 'normal', 
    fontSize: '1.6rem',
    lineHeight: '130%', 
    color: '#747474',
    marginBottom: '2rem', 
 };
  

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.8rem',  
    height: '3.2rem', 
    };

  const firstButtonStyle: React.CSSProperties = {
    padding: '0.8rem 1.6rem',  
    fontSize: '0.875rem', 
    fontWeight: '500', 
    color: '#EDEBFE',
    backgroundColor: '#7769E1', 
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '8.9rem',       
    height: '3.2rem',      
  };

  const secondButtonStyle: React.CSSProperties = {
    padding: '0.8rem 1.6rem',  
    fontSize: '0.875rem', 
    fontWeight: '500', 
    color: '#7769E1',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '8.9rem',       
    height: '3.2rem',
  };

  return (
    <div
      style={backdropStyle}
      onClick={handleBackdropClick}
    >
      <div
        style={modalStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Заголовок опционально */}
        {title && (
          <h3 id="modal-title" style={titleStyle}>
            {title}
          </h3>
        )}

        {/* контент */}
        <p style={contentStyle}>
          {content}
        </p>

        {/* Кнопки */}
        <div style={buttonContainerStyle}>
          {secondButtonText && (
            <button
              type="button"
              style={secondButtonStyle}
              onClick={(e) => {
                e.stopPropagation();
                if (onSecondButtonClick) onSecondButtonClick();
              }}
            >
              {secondButtonText}
            </button>
          )}
          {firstButtonText && (
            <button
              type="button"
              style={firstButtonStyle}
              onClick={(e) => {
                e.stopPropagation();
                if (onFirstButtonClick) onFirstButtonClick();
              }}
            >
              {firstButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};