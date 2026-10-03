import React, { createContext, useContext, useState, useEffect } from 'react';
import { MasterDentistConfig } from '../types';
import { DEFAULT_CONFIG, loadSavedConfig, saveConfig, resetConfig } from '../config';

interface ClinicContextType {
  config: MasterDentistConfig;
  updateConfig: (updates: Partial<MasterDentistConfig>) => void;
  resetToDefault: () => void;
  isCustomized: boolean;
  isModalOpen: boolean;
  selectedReason: string;
  openAppointmentModal: (reason?: string) => void;
  closeAppointmentModal: () => void;
  callClinic: () => void;
  openWhatsApp: (customMessage?: string) => void;
  getDirections: () => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<MasterDentistConfig>(DEFAULT_CONFIG);
  const [isCustomized, setIsCustomized] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedReason, setSelectedReason] = useState<string>('General Dentistry Consultation');

  useEffect(() => {
    const loaded = loadSavedConfig();
    setConfig(loaded);
    const customized = JSON.stringify(loaded) !== JSON.stringify(DEFAULT_CONFIG);
    setIsCustomized(customized);
  }, []);

  const updateConfig = (updates: Partial<MasterDentistConfig>) => {
    setConfig((prev) => {
      const next = { ...prev, ...updates };
      saveConfig(next);
      setIsCustomized(JSON.stringify(next) !== JSON.stringify(DEFAULT_CONFIG));
      return next;
    });
  };

  const handleReset = () => {
    const reset = resetConfig();
    setConfig(reset);
    setIsCustomized(false);
  };

  const openAppointmentModal = (reason?: string) => {
    if (reason) setSelectedReason(reason);
    setIsModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsModalOpen(false);
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMsg = `Hello ${config.dentistName}'s team at ${config.clinicName}, Gwalior,\n\nI would like to book a dental consultation. Could you please share available slots?`;
    const message = encodeURIComponent(customMessage || defaultMsg);
    const cleanNumber = config.whatsapp.replace(/[^0-9]/g, '');
    if (cleanNumber.length >= 10) {
      window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
    } else {
      window.open(`https://wa.me/?text=${message}`, '_blank');
    }
  };

  const callClinic = () => {
    const cleanNumber = config.phone.replace(/[^0-9+]/g, '');
    if (cleanNumber.length >= 8) {
      window.location.href = `tel:${cleanNumber}`;
    } else {
      openAppointmentModal();
    }
  };

  const getDirections = () => {
    window.open(config.googleMapsUrl, '_blank');
  };

  return (
    <ClinicContext.Provider
      value={{
        config,
        updateConfig,
        resetToDefault: handleReset,
        isCustomized,
        isModalOpen,
        selectedReason,
        openAppointmentModal,
        closeAppointmentModal,
        callClinic,
        openWhatsApp,
        getDirections,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
